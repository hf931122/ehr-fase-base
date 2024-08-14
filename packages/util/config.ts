import {http} from './http'
import cache from './cache'
// 参数配置
let config = {
  async getBiz (code: string) {
    let map = cache.getCache('config')
    let bean = map.get('BIZ')
    if (bean == null) {
      let res: any = http.ajax('post', '/api/config/get', {}, false, true, true)
      if (res.code == 200) {
        bean = res.data.config || {}
        map.put('BIZ', bean)
      }
    }
    return bean[code]
  },
  // 获取在线用户
  getOnlineUser (force?: string) {
    let map = cache.getCache('online')
    let user = map.get('user')
    if (user == null || force) {
      let res: any = http.ajax('post', '/api/online/user', {userId: ''}, false, false, true)
      user = res.data.user
      map.put('user', user)
    }
    return user
  },
  getValue (id: string, defValue?: string) {
    let map = cache.getCache('config')
    let bean = map.get(id)
    if (bean == null) {
      let res: any = http.ajax('post', '/api/config/get', {code: id}, false, true, true)
      if (res.code == 200) {
        bean = res.data.config
        map.put(id, bean)
      }
    }
    return bean ? bean.configValue : defValue
  }
}
const getOnlineUser = config.getOnlineUser
export {getOnlineUser}
export default config
