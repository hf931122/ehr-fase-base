const _receiveMessage = (e: any) => {
  let obj = e.data // 消息字符串结构:消息头 分隔字符串 消息体
  if (!obj.crossDomain) {
    return
  }
  // 如果是请求消息
  if (obj.call) {
    try {
      let callFun = eval(obj.callFun) // 消息请求的函数
      let arg = obj.arg
      if (typeof callFun != "function") {
        return
      } // 请求的函数不存在
      let resultArg = callFun.call(callFun, arg) // 请求执行
      let callBack = obj.callBackFun // 是否反馈结果
      if (callBack) {
        (window as any).sendMessage(e.source, callBack, resultArg)
      }
    } catch (e) {

    }
  }
}
/**
 * sendMessage主动发送广播消息
 * target string（iframe控件的ID）/object（iframe window,eq:如果是向父页面发送消息,则传window.parent）
 * callFun string 要访问目标iframe的方法名
 * arg 要访问目标iframe的方法的参数
 * callBackFun 消息反馈时调用的方法名
 */
const _sendMessage = (target: any, callFun: any, arg: any, callBackFun: any) => {
  try {
    let source
    if (typeof target == "string") {
      source = (document as any).getElementById(target).contentWindow
    } else if (typeof target == "object" && target != null) {
      source = target
    } else {
      source = window.top
    }
    let callMessage: any = {}
    callMessage["callFun"] = callFun
    callMessage["arg"] = arg || ""
    callMessage["callBackFun"] = callBackFun
    // let msgStr = "call|cross-domain|" + JSON.stringify(callMessage)
    callMessage["crossDomain"] = true
    callMessage["call"] = true
    source.postMessage(callMessage, "*")
  } catch (e) {

  }
}

if (!(window as any).receiveMessage) {
  (window as any).receiveMessage = _receiveMessage
  if ((window as any).attachEvent) {
    (window as any).attachEvent("onmessage", _receiveMessage)
  } else {
    (window as any).addEventListener("message", _receiveMessage, true)
  }
}
if (!(window as any).sendMessage) {
  (window as any).sendMessage = _sendMessage
}

/**
 * openTabMenu打开一个tab页
 *
 * **/
const openTabMenu = (item: any, type?: string) => {
  if (type == 'ehrTz') {
    (window as any).sendMessage(top, 'indexTool.openIndex', item)
  } else {
    (window as any).sendMessage(top, 'indexTool.openTabMenu', item)
  }
}

/**
 * closeTabMenu关闭一个tab页
 *
 * **/
const closeTabMenu = (id: string) => {
  (window as any).sendMessage(top, 'indexTool.closeTabMenu', id)
}

const windowUtil = {
  openTabMenu,
  closeTabMenu
}

export default windowUtil
