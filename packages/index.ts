import {http} from './components/util/http'
import ehrDate from './components/date/index.vue'
import ehrSelect from './components/select/index.vue'

import util from './components/util/util'
import flie from './components/util/file'
import valid from './components/util/valid'

import type { App } from 'vue'

const arry = [ehrDate,
              ehrSelect]

const install = function(Vue: App, faceConfig?: any) {
  arry.forEach((item: any) => {
    Vue.component(item.name, item)
  })
  http.init(faceConfig)
  Vue.config.globalProperties.$http = http
  Vue.config.globalProperties.$util = util
  Vue.config.globalProperties.$valid = valid
  Vue.config.globalProperties.$flie = flie
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

import '@vue/runtime-core'

// declare module '@vue/runtime-core' {
//   // GlobalComponents for Volar
//   export interface GlobalComponents {
//     EhrDate: typeof import('./components/date/index.ts')['EhrDate']
//   }

//   interface ComponentCustomProperties {
//     $http: typeof import('./components/util/http')
//     $util: typeof import('./components/util/util')
//     $valid: typeof import('./components/util/valid')
//     $flie: typeof import('./components/util/file')
//   }
// }

// declare module 'vue' {
//   export interface GlobalComponents {
//     EhrDate: typeof ehrDate,
//     EhrSelect: typeof ehrSelect
//   }
// }

// export * from './components/date'
// export * from './components/select'