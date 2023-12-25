const CacheManager: any = {data: {}, model: 'localStorage'} // localStorage,memory

// 取得缓存管理
CacheManager.getCache = function (group: any) {
  return new Cache(this, group)
}

// 取得缓存对象
CacheManager.get = function (group: any, key: string) {
  let items :string = ''
  const id = group + '##' + key
  if (this.model == 'localStorage') {
    items = localStorage.getItem(id) || ''
    items = items ? eval("(" + items + ")") : null
  } else {
    items = this.data[id]
  }
  return items
}

// 设置缓存
CacheManager.put = function (group: any, key: string, value: any) {
  const id = group + '##' + key
  if (this.model == 'localStorage') {
    localStorage.setItem(id, JSON.stringify(value))
  } else {
    this.data[id] = value
  }
}

/** 清除缓存 不传值 所有 ##； 传一个值，所有值##; 传两个值，具体的字典 */
CacheManager.clear = function (group: any, name?: string) {
  if (group) {
    const prefix = group + '##'
    if (this.model == "localStorage") {
      if (name) { // 清除单个缓存 group：dict  name： AllDept
        localStorage.removeItem(prefix + name)
        return
      }
      for (const key in localStorage) {
        if (key.startsWith(prefix)) {
          localStorage.removeItem(key)
        }
      }
    } else {
      for (const key in this.data) {
        if (key.startsWith(prefix)) {
          this.data[key] = undefined
        }
      }
    }
  } else {
    for (const key in localStorage) {
      if (key.indexOf('##') >= 0) {
        localStorage.removeItem(key)
      }
    }
    this.data = {}
  }
}

class Cache {
  group: any
  manager: any
  constructor (manager: any, group: any) {
    this.group = group
    this.manager = manager
    return this
  }

  get (key: string) {
    const value = this.manager.get(this.group, key)
    return value
  }

  put (key: string, value: any) {
    this.manager.put(this.group, key, value)
  }
  /** 清除缓存 不传值 所有 ##； 传一个值，所有值##; 传两个值，具体的字典 */
  clear (clearName?: string, key?: string) {
    this.manager.clear(clearName || this.group, key)
  }
}
export default CacheManager
