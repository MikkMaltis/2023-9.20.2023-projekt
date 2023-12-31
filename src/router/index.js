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
      path: '/scanner',
      name: 'scanner',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ScanView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue')
    },
    {
    path: '/manual',
    name: 'manual',
    component: () => import('../views/ManualAddView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/plastic',
    name: 'plastic',
    component: () => import('../views/PlasticView.vue')
  },
  {
    path: '/bio',
    name: 'bio',
    component: () => import('../views/BioView.vue')
  },
  {
    path: '/mix',
    name: 'mix',
    component: () => import('../views/MixView.vue')
  },
  {
    path: '/Cardboard',
    name: 'cardboard',
    component: () => import('../views/CardboardView.vue')
  },
  {
    path: '/glass',
    name: 'glass',
    component: () => import('../views/GlassView.vue')
  },
  {
    path: '/oldpaper',
    name: 'oldpaper',
    component: () => import('../views/OldpaperView.vue')
  },
  ]
})

export default router
