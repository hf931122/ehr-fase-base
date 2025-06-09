/// <reference types="vite/client" />

declare module 'qs'
declare module 'axios'
declare module 'moment'
declare module 'ehr-safety'
declare module '*.js'
declare module '*.json'

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare interface Window {
  Vue: any
}