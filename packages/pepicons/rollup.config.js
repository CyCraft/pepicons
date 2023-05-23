/* eslint-disable */

// npm i -D rollup typescript rollup-plugin-dts rollup-plugin-esbuild
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import pkg from './package.json' assert { type: 'json' }

// ------------------------------------------------------------------------------------------
// Builds
// ------------------------------------------------------------------------------------------
/**
 * @param {{ input: string; output: { esm: { types: string; default: string }; cjs: { types: string; default: string } } }} options
 */
function esbuildAndDts(options) {
  const { input, output } = options

  if (!output.cjs.default.endsWith('.cjs')) throw new Error('output.cjs.default must end with .cjs')
  if (!output.esm.default.endsWith('.js')) throw new Error('output.esm.default must end with .js')
  if (!output.cjs.types.endsWith('.d.cts')) throw new Error('output.cjs.types must end with .d.cts')
  if (!output.esm.types.endsWith('.d.ts')) throw new Error('output.esm.types must end with .d.ts')

  return [
    {
      input,
      output: [
        { file: output.esm.default, format: 'esm', generatedCode: { constBindings: true } },
        { file: output.cjs.default, format: 'cjs', generatedCode: { constBindings: true } },
      ],
      plugins: [esbuild({ sourceMap: false, target: 'esnext', loaders: { '.json': 'json' } })],
    },
    {
      input,
      output: [
        { file: output.esm.types, format: 'esm', generatedCode: { constBindings: true } },
        { file: output.cjs.types, format: 'cjs', generatedCode: { constBindings: true } },
      ],
      plugins: [dts()],
    },
  ]
}

export default [
  ...esbuildAndDts({
    input: 'src/index.ts',
    output: {
      esm: pkg.exports['.'].import,
      cjs: pkg.exports['.'].require,
    },
  }),
  ...esbuildAndDts({
    input: 'src/icons/print/index.ts',
    output: {
      esm: pkg.exports['./print'].import,
      cjs: pkg.exports['./print'].require,
    },
  }),
  ...esbuildAndDts({
    input: 'src/icons/pop/index.ts',
    output: {
      esm: pkg.exports['./pop'].import,
      cjs: pkg.exports['./pop'].require,
    },
  }),
  ...esbuildAndDts({
    input: 'src/icons/pencil/index.ts',
    output: {
      esm: pkg.exports['./pencil'].import,
      cjs: pkg.exports['./pencil'].require,
    },
  }),
]
