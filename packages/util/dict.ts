import {http} from './http'
import cache from './cache.js'
let Dict: any = {}

// 取得字典文本
Dict.getText = function (code: string, value: any) {
  let temp = value != null ? (value + '') : ''
  if (temp.indexOf(',') != -1) {
    let texts: any = []
    let values = temp.split(/,/g)
    values.forEach(function (obj) {
      let item = Dict.getItem(code, obj) || {}
      texts.push(item.label || '')
    })
    return texts.join(',')
  } else {
    let item = Dict.getItem(code, value) || {}
    return item.label || ''
  }
}

// 取得字典项
Dict.getItem = function (code: string, value: any) {
  let items = Dict.getItems(code)
  for (let i = 0; i < items.length; i++) {
    if (items[i].value == value) {
      return items[i]
    }
  }
  return null
}

// 取得字典项
Dict.getItems = function (code: string, excludes?: Array<any>, sys?: string) {
  excludes = excludes || []
  let map = cache.getCache('dict')
  let items = map.get(code)
  if (!items) { // 数据速查
    let result: any = http.ajax('get', '/ehr/dict/items/getlist', {type: code}, false, true)
    if (result.data) {
      items = result.data
      items.sort(function (a: any, b: any) {
        return (a.sort || 0) - (b.sort || 0)
      })
      map.put(code, items)
    }
  }
  let views = items
  if (excludes && excludes.length) {
    views = items.filter((item: any) => !excludes.includes(item.value))
  }
  if (sys) {
    views = views.filter((item: any) => item.field01 && item.field01.includes(sys))
  }
  return views
}

// 刷新字典
Dict.clear = function () {
  let map = cache.getCache('dict')
  map.clear()
}

// 刷新字典
Dict.render = function (code: string) {
  return function (value: any) {
    let text = Dict.getText(code, value)
    return text
  }
}

export default Dict
