import axios from 'axios'
import { message as umessage, message } from 'ant-design-vue';
import loading from './loading/loading.js'
import anyHPass from './anyHPass'
import uuid from './uuid'
import Qs from 'qs'
import refrsh from './refrshToken'
// axios 配置
axios.defaults.timeout = 3*60*1000
// axios.defaults.baseURL = paths.URL
let faceConfig: any = {}, a_count: number = 0, dialog: any, diaurl: any = null
let basePath: any = faceConfig.basePath
axios.defaults.baseURL = faceConfig.basePath

// http request 拦截器，请求时拦截
axios.interceptors.request.use(
  (config: any) => {
    // config.data = JSON.stringify(config.data);
     //config.headers['aesrequest'] = 'aesrequest'
    // config.data={EncryptContent:""}
    // 参数预处理
    let accessToken = refrsh.getCookie()
    !config[ef([7, 4, 0, 3, 4, 29, 17])][ef([0, 2, 2, 4, 17, 17, 57, 14, 10, 4, 13])] && accessToken && (config[ef([7, 4, 0, 3, 4, 29, 17])][ef([0, 2, 2, 4, 17, 17, 57, 14, 10, 4, 13])] = accessToken)
    if (accessToken && config.url != '/api/config/get' && config.url.indexOf('/oauth/refreshToken') == -1) {
      anyHPass.enHyPass(config.url, config[ef([7, 4, 0, 3, 4, 29, 17])])
      config[ef([7, 4, 0, 3, 4, 29, 17])][ef([0, 2, 2, 4, 17, 17, 57, 14, 10, 4, 13, 67])] = ''
      let uuid_str = uuid.created()
      uuid_str && (config[ef([7, 4, 0, 3, 4, 29, 17])][ef([8, 12, 4, 8])] = uuid_str)
    }
    return config
  },
  (err: any) => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  (response: any) => {
    return Promise.resolve(response)
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

const http = {
  init (urls: any) {
    faceConfig = urls
    urls.dialog && (dialog = urls.dialog)
    diaurl = urls.diaurl
    basePath = urls.basePath
    axios.defaults.baseURL = urls.basePath
    refrsh.init(urls.env)
  },
  /** 第一个参数在data中，第二个参数在url后面 */
  submit(method: string, url: string, data?: any, queryParams?: any, header?: any) {
    return sendhttp(method, url, queryParams, header ? Qs.stringify(data) : data, header)
  },
  /** 第一个参数在data中，第二个参数在url后面 */
  submit2(method: string, url: string, data?: any, queryParams?: any, header?: any) {
    return sendhttp(method, url, queryParams, data, header)
  },
  /** 公卫请求；第一个参数在url中，第二个参数在data后面 */
  submitEhr(method: string, url: string, queryParams?: any, data?: any, header?: any) {
    return sendhttp(method, faceConfig.ehrPath + url, queryParams, data, header)
  },
  postFile(url: string, data?: any, queryParams?: any, header?: any) {
    return sendhttp('post', url, queryParams, data, header)
  },
  ajax(method: string, url: string, data: any, isAsync = false, isformData = false, isEhr = false) {
    return sendAjax(url, method, data, isAsync, isformData, isEhr)
  },
  get (url: string, params: any) {
    return sendhttp('get', url, params, undefined)
  },
  del (url: string, params: any, data: object = {}) {
    return sendhttp('delete', url, params, data)
  },
  post (url: string, data: object = {}) { // Qs.stringify(data)
    return sendhttp('post', url, undefined, data)
  },
  /** params参数在data中，data参数在url后面 */
  put(url: string, data: object = {}, params: any) {
    return sendhttp('put', url, params, data)
  },
  //返回Promise对象,复杂json对象,例如包含数组
  cpost (url: string, data={}) {
    return axios({
      method: 'post',
      url,
      data: data,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then((response: any) => {
      return checkStatus(response.data)
    }).catch((err: any) => {
      return checkCode(err)
    })
  }
}

const sendhttp = (method: string, url: string, queryParams?: any, data?: any, headers?: object) => {
  // !headers && (headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
  if (basePath.indexOf('ehrcfis') > -1 && !headers && url.indexOf('/file/uploadFile') == -1) {
    headers = {roletype: 'fis'}
  }
  let responseType = 'json'
  if (data && data.responseType) {
    responseType = data.responseType
    delete data.responseType
  }
  if (queryParams && queryParams.responseType) {
    responseType = queryParams.responseType
    delete queryParams.responseType
  }
  refrsh.validTokenTime(url)
  const submitParameter: any = {
    method,
    url,
    params: queryParams, // get请求，参数
    data: data,
    responseType: responseType, // 默认的
    withCredentials: true, // 默认的
    isFormData: false
  }
  submitParameter[ef([7, 4, 0, 3, 4, 29, 17])] = headers
  const promise = axios(submitParameter);
  let load = new loading()
  load.init()
  return new Promise((resolve, reject) => {
    return promise.then((response: any) => {
      load.hide()
      return resolve(checkStatus(response.data, submitParameter))
    }, (error: any) => {
      load.hide()
      if (error.response?.status == '468') { // text/html; application/json
        openIframe()
        return
      }
      return reject(checkCode(error))
    })
  })
}

function openIframe () {
  if (a_count > 0 || !dialog) {
    !dialog && umessage.warning('请联系开发人员检测系统弹窗！')
    return
  }
  a_count++
  let url = basePath + '/html/safe.html' // location.origin + location.pathname + '#/validPeople'
  dialog.open(diaurl, {index: true, url: url}, {title: '提示', footer: false, width: '500px',
    onClose: () => {
      a_count = 0
    }})
}

//返回data信息
function checkStatus (response: any, submitParame?: any) {
  if (submitParame && submitParame.responseType == 'blob') {
    return response
  }
  // 如果http状态码正常，则直接返回数据
  if (response && response.errors && response.errors instanceof Array) {
    if ((response.errors[0].errorCode == '302' && response.errors[0].msg == 'session失效') ||
      (response.errors[0].errorCode == '403' && response.errors[0].msg == 'token失效') ||
      ((response.errors[0].errorCode == '403' || response.errors[0].errorCode == '304') && response.errors[0].msg == '未登录')) {
      LogOuts(response)
    } else {
      umessage.error(response.errors[0].msg)
      response.code = 404
      return response
    } 
  } else if (response && (response.code === 401 || response.code === 403 || response.code === 302 ||
    (response.code === 200 && response.errors && response.errors && response.errors.errorCode === 403))) {
      LogOuts(response)
    return {code: 403}
  } else if (response && (response.code === 200 || response.code === 304)) {
    return response
  } else {
    umessage.warning(response.message)
    return response
  }
}

function checkCode (res: any) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  let errorInfo: any = {
    errorStatus: '',
    errorMessage: ''
  }
  const response = res.response
  if (response) {
    switch (response.status) {
      case 404:
        errorInfo = {
          errorStatus: 404,
          errorMessage: '找不到请求的地址'
        }
        break
      case 401:
        errorInfo = {
          code: '302',
          data: '',
          message: '当前用户没有权限',
          errorStatus: 401,
          errorMessage: '当前用户没有权限'
        }
        LogOuts(errorInfo)
        break
      case 403:
        errorInfo = {
          errorStatus: 403,
          errorMessage: '访问被拒绝'
        }
        break
      case 500:
        errorInfo = {
          errorStatus: 500,
          errorMessage: '服务器出现问题'
        }
        break
      case 400:
        errorInfo = {
          errorStatus: 400,
          errorMessage: '请求参数错误'
        }
        break
      case 405:
        errorInfo = {
          errorStatus: 405,
          errorMessage: '请求方法错误'
        }
        break
      case 412:
        errorInfo = {
          errorStatus: 412,
          errorMessage: response.data.issue[0].diagnostics
        }
          break
      default:
        errorInfo = {
          errorStatus: -2,
          errorMessage: response.data.issue ? response.data.issue[0].diagnostics : '未知错误'
        }
        break
    }
  } else {
    errorInfo = {
      errorStatus: -3,
      errorMessage: '网络链接错误'
    }
  }
  umessage.warning(errorInfo.errorMessage)
  return errorInfo.errorMessage
}

/**
 * http请求方法; isAsync = true, 默认异步请求, post提交文件isformData，传true
 * */
 function sendAjax(url: string, method: string, data: any, isAsync = true, isformData = false, isEhr = false) {
  // return new Promise(function(resolve, reject) {
    if (!window.XMLHttpRequest) {
      return {code: 500, data: '请求创建失败！'}
    }
    const xhr = new XMLHttpRequest()
    if (data) {
      data.frontUrl = document.location.href
      // data._modulePartId_ = '6ec7580fac304f049ebde78e7bc4f3a8'
    }
    // xhr.timeout = 3*60*1000
    if(method.toLowerCase()==="get" && data!==undefined){
      url += "?" + formatGetUrl(data)
    }
    refrsh.validTokenTime(url)
    let full_url = url
    if (!full_url.startsWith('http')) {
      full_url = isEhr ?  (faceConfig.ehrPath + url) : (basePath + url)
    }
    //3.打开连接
    xhr.open(method, full_url, isAsync)
    let accessToken = refrsh.getCookie()
    if (accessToken && url.indexOf('/api/config/get') == -1 && url.indexOf('/oauth/refreshToken') == -1) {
      let h_param: any = {}
      anyHPass.enHyPass(url, h_param)
      for (const key in h_param) {
        xhr.setRequestHeader(key, h_param[key])
      }
      xhr.setRequestHeader(ef([0, 2, 2, 4, 17, 17, 57, 14, 10, 4, 13, 67]), '')
      let uuid_str = uuid.created()
      xhr.setRequestHeader(ef([8, 12, 4, 8]), uuid_str)
    }
    xhr.setRequestHeader(ef([0, 2, 2, 4, 17, 17, 57, 14, 10, 4, 13]), accessToken)
    xhr.setRequestHeader('Access-Control-Max-Age', '1000')
    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true')
    if (basePath.indexOf('ehrcfis') > -1 && (url.indexOf('/sys/area/get') > -1 || url.indexOf('/sys/area/getchildren') > -1)) {
      xhr.setRequestHeader('roletype', 'fis')
    }
    if(method.toLowerCase() === "post" && data !== undefined) {
      if (isformData) { // 发送文件
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(Qs.stringify(data))
      } else {
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
        if (typeof data === 'object') {
          try {
            data = JSON.stringify(data)
          } catch (e) { }
        }
        xhr.send(data)
      }
    } else {
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
      xhr.send(null)
    }
    xhr.ontimeout = function () {
      umessage.warning('请求超时！')
    }
    let res = xhr.responseText
    if (res.startsWith('<html')) {
      openIframe()
      return {
        code: '500',
        data: null,
        message: '用户操作检测！'
      }
    }
    try { res = JSON.parse(res) } catch (e) { }
    return checkStatus(res)
}

function formatGetUrl(data: any) {
  let ret = ''
  for (const i in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(i)) {
          ret = ret.length > 0 ? ret + '&' : ret
          ret = ret + i + '=' + data[i]
      }
  }
  return ret
}
function LogOuts (data: any) {
  refrsh.outLogin(data)
}
export {http}

