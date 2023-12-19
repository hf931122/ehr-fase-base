import {http} from './components/util/http'
import ehrDate from './components/date/index.vue'
import ehrSelect from './components/select/index.vue'
import EhrPhotot from './components/photo/index.vue'
import EhrUploadList from './components/uploadList/index.vue'

import util from './components/util/util'
import flie from './components/util/file'
import valid from './components/util/valid'
import dict from './components/util/dict'
import cache from './components/util/cache'
import ui from './components/util/ui'
import windowUtil from './components/util/windowUtil'

import type { App } from 'vue'

const arry = [ehrDate, ehrSelect, EhrPhotot, EhrUploadList]

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
  Vue.config.globalProperties.$ui = ui
  Vue.config.globalProperties.$windowUtil = windowUtil
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

// export * from './components/date/index'
// export * from './components/select/index'
// export * from './components/photo/index'
// export * from './components/uploadList/index'