import {http} from './components/util/http'
import ehrDate from './components/date/index.vue'
import ehrSelect from './components/select/index.vue'

import util from './components/util/util'
import flie from './components/util/file'
import valid from './components/util/valid'

import type { App } from 'vue'

const arry = [{view: ehrDate, name: 'ehrDate'},
              {view: ehrSelect, name: 'ehrSelect'}]

const install = function(Vue: App) {
  arry.forEach((item: any) => {
    Vue.component(item.name, item.view)
  })
  Vue.config.globalProperties.$http = http
  Vue.config.globalProperties.$util = util
  Vue.config.globalProperties.$valid = valid
  Vue.config.globalProperties.$flie = flie
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

export * from './components/date'