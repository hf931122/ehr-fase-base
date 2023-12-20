const MD_COOKIE = 'userInfo'
export default {
  setCookie: function(cname: string, cvalue: any, exdays: number){
    const d = new Date()
    exdays = exdays ? exdays : 30
    d.setTime(d.getTime()+(exdays*24*60*60*1000))
    const expires = "expires="+d.toUTCString()
    const mdOr = MD_COOKIE.indexOf(cname)
    if (mdOr !== -1) {
      document.cookie = cname + "=" + escape(cvalue) + "; " + expires + "; path=/"
    }
    else{
      document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"
    }
  },
  getCookie: function(cname: string){
    const arr = document.cookie.match(new RegExp("(^| )" + cname + "=([^;]*)(;|$)"))
    if (arr != null){
      const mdOr = MD_COOKIE.indexOf(cname)
      if (mdOr !== -1) {
        return unescape(arr[2])
      }
      else{
        return arr[2]
      }
    } 
    return ''
  },
  delCookie:function(key: string){
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = this.getCookie(key);
    if (cval!=null)  document.cookie = key + "=" + cval + ";expires=" + exp.toUTCString();
  },
  clearCookie:function(){
    const keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
    if (keys) { 
      for (let i = keys.length; i--;) 
        document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
    } 
  },
  checkCookie: function(item: string){
    const has_name = this.getCookie(item)
    if (has_name === ''){
      alert("Cookie 中不含:" + item);
    }
  }
}