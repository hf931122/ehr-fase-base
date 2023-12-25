import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import faceConfig from '../src/assets/util/faceConfig'

import Antd from 'ant-design-vue'
import ehrBasic from "../lib/ehr-face-base.es.js"

import '../lib/style.css' // 样式一定要引入
import 'ant-design-vue/dist/antd.css'

import components from './components/index'

const app = createApp(App)

app.use(Antd)
app.use(ehrBasic, faceConfig)
app.use(components)
app.use(router)

app.mount('#app')
