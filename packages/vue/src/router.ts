import { pages as pagesVitePlay } from '@viteplay/vue/client'
import { createRouter, createWebHistory } from 'vue-router'

console.log(`%c 🛣`, 'font-size: 2rem', `VitePlay generated routes → `, pagesVitePlay)

export const router = createRouter({
  history: createWebHistory(),
  routes: [...pagesVitePlay],
})

// let initialPageRender = true

// router.beforeEach((to, from, next) => {
//   if (initialPageRender && to.path === '/') {
//     initialPageRender = false
//     next('/pepicon')
//     return
//   }
//   return next()
// })
