import vue from '@vitejs/plugin-vue'
import viteplay from '@viteplay/plugin'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteplay({
      pages: [
        {
          component: './src/components/Pepicon.vue',
          examples: './examples/*.vue',
        },
      ],
      base: '/',
    }),
  ],
})
