import vue from '@vitejs/plugin-vue'
import ExecSh from 'exec-sh'
import fs from 'fs'
import path from 'path'
import { Plugin, defineConfig } from 'vite'
import pkg from './package.json' assert { type: 'json' }

const { promise: ExecShPromise } = ExecSh
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
            path.resolve(__dirname, 'dist/cjs/index.d.ts'),
            path.resolve(__dirname, 'dist/cjs/index.d.cts'),
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
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: namePascal,
      formats: ['cjs', 'es'],
      fileName: (format) => (format === 'cjs' ? 'cjs/index.cjs' : 'index.js'),
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
