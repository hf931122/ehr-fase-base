import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: '/application',
          name: 'application',
          // title: '应用系统',
          component: () => import('../views/application/index.vue')
        }
      ]
    }
  ]
})

export default router
