import { camelCase, pascalCase } from 'case-anything'
import { deleteSync } from 'del'
import fs from 'fs-extra'
import path from 'path'
import { autoGeneratedWarning } from './helpers/autoGeneratedWarning.js'
import { PATH_PEPICONS, PATH_VUE } from './helpers/filePathHelpers'

export async function generateVueComponents() {
  const vueIconsFolder = path.join(PATH_VUE, 'src/icons')
  deleteSync(vueIconsFolder)
  fs.mkdirSync(vueIconsFolder)

  const types = ['pop', 'print', 'pencil'] as const
  let iconsIndexContent = ``
  const iconsIndexPath = path.join(PATH_VUE, 'src/icons/index.ts')

  types.forEach((type) => {
    const dir = path.join(PATH_PEPICONS, 'src/icons', type)

    const icons: { name: string; type: string; componentName: string }[] = []

    fs.readdirSync(dir).forEach((filename) => {
      if (filename === 'index.ts') return
      const name = path.basename(filename, path.extname(filename))
      const componentName = pascalCase(type + '-' + name)
      /**
       * TODO: For some reason the following won't work:
       * ```js
       * `import { ${camelCase(name)} } from 'pepicons/${type}'`
       * ```
       * Try tweaking the content to the above and then:
       * ```
       * npm run build
       * ```
       */
      const componentContent = `${autoGeneratedWarning}

import { defineComponent } from 'vue'
import { ${camelCase(name)} } from 'pepicons/dist/${type}.esm'
import { baseProps, createSetup } from '../../component'

export default defineComponent({
  name: '${componentName}',
  props: {...baseProps},
  setup: createSetup(${camelCase(name)}, '${type}')
})
`.trim()
      const componentPath = path.join(PATH_VUE, 'src/icons', type, filename)

      fs.outputFileSync(componentPath, componentContent)
      icons.push({ name, type, componentName })
    })

    iconsIndexContent += `
${autoGeneratedWarning}
export const ${type}Icons = {
${icons.map((icon) => `  '${icon.name}': () => import('./${icon.type}/${icon.name}')`).join(',\n')}
}

${icons
  .map((icon) => {
    return `export { default as ${icon.componentName} } from './${icon.type}/${icon.name}'`
  })
  .join('\n')}
`
  })

  fs.outputFileSync(iconsIndexPath, iconsIndexContent)
}
