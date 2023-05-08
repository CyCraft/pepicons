import { pages } from '@viteplay/vue/client'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: () => import('../pages/MainLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('../pages/LandingPage.vue') },
        { path: 'dev', component: () => import('../pages/Dev.vue') },
      ],
    },
    ...pages,
    {
      path: '/:catchAll(.*)',
      component: () => import('../pages/Error404.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (to.path != from.path) return { x: 0, y: 0 }
  },
  // mode: process.env.VUE_ROUTER_MODE,
  // base: process.env.VUE_ROUTER_BASE,
})

export default router
