import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'

import '../lib/style.css' // 样式一定要引入
import ehrBasic from "../lib/ehr-face-base.es.js"
import components from './components/index'

const app = createApp(App)

app.use(Antd)
app.use(ehrBasic)
app.use(components)
app.use(router)

app.mount('#app')
