import select from './index.vue'

select.install = function(Vue: any) {
  Vue.component(select.name, select)
}
export default select