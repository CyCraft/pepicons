import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteplay from '@viteplay/plugin'
import path from 'path'
import pkg from './package.json'

const nameCamel = pkg.name
const namePascal = nameCamel.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase())
const dependencies = Object.keys(pkg.dependencies || [])

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
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: namePascal,
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', ...dependencies],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
