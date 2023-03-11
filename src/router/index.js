import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/laluyan',
      name: 'laluyan',
      component: () => import('../views/laluyan.vue')
    },
    {
      path: '/liwanag',
      name: 'liwanag',
      component: () => import('../views/liwanag.vue')
    },
    {
      path: '/maaba',
      name: 'maaba',
      component: () => import('../views/maaba.vue')
    },
    {
      path: '/orcega',
      name: 'orcega',
      component: () => import('../views/orcega.vue')
    },
    {
      path: '/rayos',
      name: 'rayos',
      component: () => import('../views/rayos.vue')
    }
  ]
})

export default router
