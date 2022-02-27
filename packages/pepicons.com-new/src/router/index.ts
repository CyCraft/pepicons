import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'
// const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (to.path != from.path) return { x: 0, y: 0 }
  },
  // mode: process.env.VUE_ROUTER_MODE,
  // base: process.env.VUE_ROUTER_BASE,
})

export default router
