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
      components: './src/components/*.vue',
      componentExamples: './src/components/examples/*.vue',
      base: '/',
    }),
    // "pepicons/src/icons" is not exposed in the `exports` field of `pepicons` package
    // So we resolve it manually
    {
      name: 'resolve-pepicons-icons',
      enforce: 'pre',
      resolveId(id) {
        if (id.startsWith('pepicons/src/icons/')) {
          return id.replace('pepicons', path.join(__dirname, '../pepicons')) + '.ts'
        }
      },
    },
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
