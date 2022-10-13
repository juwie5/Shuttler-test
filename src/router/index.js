import { createRouter, createWebHistory } from 'vue-router'
import NavigationView from '../components/NavigationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NavigationView
    }
  ]
})

export default router
