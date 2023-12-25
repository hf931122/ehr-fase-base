import {http} from './util/http'
import ehrDate from './components/date/index.vue'
import ehrSelect from './components/select/index.vue'
import EhrPhoto from './components/photo/index.vue'
import EhrUploadList from './components/uploadList/index.vue'

import util from './util/util'
import flie from './util/file'
import valid from './util/valid'
import dict from './util/dict'
import cache from './util/cache'

import type { App } from 'vue'

const arry = [ehrDate, ehrSelect, EhrPhoto, EhrUploadList]

const install = function(Vue: App, faceConfig?: any) {
  arry.forEach((item: any) => {
    Vue.component(item.name, item)
  })
  http.init(faceConfig)
  flie.init(faceConfig)
  Vue.config.globalProperties.$http = http
  Vue.config.globalProperties.$util = util
  Vue.config.globalProperties.$valid = valid
  Vue.config.globalProperties.$flie = flie
  Vue.config.globalProperties.$dict = dict
  Vue.config.globalProperties.$cache = cache
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

// export * from './components/date/index'
// export * from './components/select/index'
// export * from './components/photo/index'
// export * from './components/uploadList/index'