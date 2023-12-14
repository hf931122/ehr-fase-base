import {http} from './http'
import cache from './cache'
// 参数配置
let config = {
  async getBiz (code: string) {
    let map = cache.getCache('config')
    let bean = map.get('BIZ')
    if (bean == null) {
      let res: any = http.ajax('post', '/api/config/get', {}, false, true)
      if (res.code == 200) {
        bean = res.data.config || {}
        map.put('BIZ', bean)
      }
    }
    return bean[code]
  },
  getValue (id: string, defValue?: string) {
    let map = cache.getCache('config')
    let bean = map.get(id)
    if (bean == null) {
      let res: any = http.ajax('post', '/api/config/get', {code: id}, false, true)
      if (res.code == 200) {
        bean = res.data.config
        map.put(id, bean)
      }
    }
    return bean ? bean.configValue : defValue
  }
}
export default config
