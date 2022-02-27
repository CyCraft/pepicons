import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'
// const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
