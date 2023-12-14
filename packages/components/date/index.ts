import date from './index.vue'
import type { App } from 'vue'

date.install = function(Vue: App) {
  Vue.component(date.name, date)
}
export default date
export const EhrDate = date