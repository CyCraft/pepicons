import { ViteSSG } from 'vite-ssg'
import App from './app.vue'
import Home from './pages/index.vue'
import Privacy from './pages/privacy.vue'
import NotFound from './error.vue'
import { initializeAnalytics } from './analytics'

export const createApp = ViteSSG(
  App,
  {
    routes: [
      { path: '/', component: Home },
      { path: '/privacy', component: Privacy },
      { path: '/:pathMatch(.*)*', component: NotFound },
    ],
  },
  ({ app, isClient }) => {
    if (isClient) {
      app.mixin({
        mounted() {
          if (this === this.$root) initializeAnalytics()
        },
      })
    }
  },
  { hydration: true },
)
