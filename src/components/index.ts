import layouView from './layouView.vue'

const arry = [layouView]

export default (Vue: any)=>{
  arry.forEach((item: any) => {
    Vue.component(item.name, item)
  })
}