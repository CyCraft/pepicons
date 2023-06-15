import vue from '@vitejs/plugin-vue'
import ExecSh from 'exec-sh'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Plugin, defineConfig } from 'vite'
import pkg from './package.json' assert { type: 'json' }
const { promise: ExecShPromise } = ExecSh

const DIR = typeof __dirname === 'undefined' ? dirname(fileURLToPath(import.meta.url)) : __dirname
const SRC_FOLDER = path.resolve(DIR, './src/')

function execSh(command: string) {
  return ExecShPromise(command, { cwd: path.resolve('./') })
}

const nameCamel = pkg.name
const namePascal = nameCamel.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase())
const dependencies = Object.keys(pkg.dependencies || [])

export function pluginDts(): Plugin {
  return {
    name: 'vue-tsc',
    writeBundle: {
      sequential: true,
      order: 'post',
      async handler({ format }) {
        if (format === 'cjs') {
          await execSh('vue-tsc --declarationDir ./dist/cjs --declaration --emitDeclarationOnly')
          fs.rename(
            path.resolve(DIR, 'dist/cjs/index.d.ts'),
            path.resolve(DIR, 'dist/cjs/index.d.cts'),
            console.error,
          )
        } else {
          await execSh('vue-tsc --declarationDir ./dist --declaration --emitDeclarationOnly')
        }
      },
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pluginDts()],
  build: {
    lib: {
      entry: [path.resolve(DIR, 'src/index.ts')],
      name: namePascal,
      formats: ['cjs', 'es'],
      fileName: (format, name) => {
        console.log({ format, name })
        if (format === 'cjs') {
          if (name.includes('/icons/')) {
            return `cjs/icons/${name.split('/icons/')[1]}.cjs`
          }
          return 'index.cjs'
        } else {
          if (name.includes('/icons/')) {
            return `icons/${name.split('/icons/')[1]}.js`
          }
          return `index.js`
        }
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      treeshake: 'smallest',
      external: ['vue', ...dependencies],
      output: {
        // manualChunks: (id) =>
        //   (id.includes('/pepicons/')
        //     ? `pepicons/${path.relative(DIR, id)}`
        //     : path.relative(SRC_FOLDER, id)
        //   ).split('.')[0],
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
