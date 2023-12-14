import windowUtil from './windowUtil'
import cache from './cache.js'

let ui = {
  // 打开对话框
  openDialog (dialog: any, url: string, data: any, options: any) {
    dialog.open(url, data, options)
  },
  // 覆盖首页的台账
  openIndex (param: any) {
    windowUtil.openTabMenu(param, 'ehrTz')
  },
  // 打开Tab标签
  openTab (uri: string, data: any, options: any) {
    let title = options.title || "标签"
    let map = cache.getCache('user')
    let menusList = map.get('menus') || []
    let id = data ? data.ryId : ''
    menusList.some((item: any) => {
      if (title == item.name) {
        id = item.id
        return true
      }
    })
    data = Object.assign(data, {url: uri, tabId: title})
    let queryParams = this.mystringify(data || {})
    queryParams.length && (queryParams = queryParams.slice(1))
    let base = this.getContextPath(location.href)
    let url = base + '/index.html#/' + uri + '?' + queryParams
    if (options.type && options.type == 'cpt') { // 报表打开特殊处理，不带index.html#/
      url = uri
    }
    console.log(url)
    windowUtil.openTabMenu({id: id || title, name: title, url: url})
  },
  getContextPath(url: string) {
    let regexp = /(https|http):\/\/.+?\/([\w-]+)\/.+/
    let base = ""
    if (url.match(regexp)) {
      base = "/" + url.replace(regexp, "$2")
    }
    return base
  },
  mystringify(param: any, key?: any, encode?: any): string {
    if (param == null) return ''
    let paramStr = ''
    let t = typeof (param)
    if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
    } else {
      for (let i in param) {
        let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
        paramStr += this.mystringify(param[i], k, encode)
      }
    }
    return paramStr
  }
}

export default ui
