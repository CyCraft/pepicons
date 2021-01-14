// import { route } from 'quasar/wrappers'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

// export default route(function ({ Vue }) {
Vue.use(VueRouter)

export const Router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.path != from.path) return { x: 0, y: 0 }
  },
  routes,

  // Leave these as is and change from quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
})

export default Router
// return Router
// })
