import vue from '@vitejs/plugin-vue'
import ExecSh from 'exec-sh'
import glob from 'fast-glob'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Plugin, defineConfig } from 'vite'
import pkg from './package.json' assert { type: 'json' }
const { promise: ExecShPromise } = ExecSh

const DIR = typeof __dirname === 'undefined' ? dirname(fileURLToPath(import.meta.url)) : __dirname

function execSh(command: string) {
  return ExecShPromise(command, { cwd: path.resolve('./') })
}

const nameCamel = pkg.name
const namePascal = nameCamel.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase())
const dependencies = Object.keys(pkg.dependencies || [])
const PEPICONS_REGEX = /^pepicons[\\/]dist/
const VUE_COMPONENT_REGEX = /^vue[\\/]src[\\/]/

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
      entry: Object.fromEntries(
        [
          ...glob.sync('./src/components/*.vue'),
          ...glob.sync('./src/{component,index,icons}.ts'),
          ...glob.sync('./src/icons/**/*.ts'),
        ].map((file) => [
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      name: namePascal,
      formats: ['cjs', 'es'],
      fileName: (format, name) => {
        if (format === 'cjs') {
          if (name.match(PEPICONS_REGEX)) {
            return `cjs/${name.replace(PEPICONS_REGEX, 'pepicons')}.js`
          }
          if (name.match(VUE_COMPONENT_REGEX)) {
            return `cjs/${name.replace(VUE_COMPONENT_REGEX, '').replace(/\.vue$/, '')}.js`
          }
          return `cjs/${name.replace(/\.vue$/, '')}.js`
        } else {
          if (name.match(PEPICONS_REGEX)) {
            return `es/${name.replace(PEPICONS_REGEX, 'pepicons')}.js`
          }
          if (name.match(VUE_COMPONENT_REGEX)) {
            return `es/${name.replace(VUE_COMPONENT_REGEX, '').replace(/\.vue$/, '')}.js`
          }
          return `es/${name.replace(/\.vue$/, '')}.js`
        }
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', ...dependencies],
      preserveEntrySignatures: 'strict',
      output: {
        preserveModules: true,
        chunkFileNames: '[format]/[name].js',
        minifyInternalExports: false,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
