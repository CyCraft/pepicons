import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import type {} from 'vite-ssg'

export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    includedRoutes: () => ['/', '/privacy', '/404'],
  },
})
