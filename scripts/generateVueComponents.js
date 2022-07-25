import path from 'path'
import fs from 'fs-extra'
import { pascalCase } from 'case-anything'

const PATH_PEPICONS = './packages/pepicons'
const PATH_VUE = './packages/vue'

const slash = (str) => str.replace(/\\/g, '/')

export function generateVueComponents() {
  const types = ['pop', 'print']
  let iconsIndexContent = ``
  const iconsIndexPath = path.join(PATH_VUE, 'src/icons/index.ts')

  types.forEach((type) => {
    const dir = path.join(PATH_PEPICONS, 'src/icons', type)
    const indexFile = path.join(PATH_VUE, 'src/icons', type + '.ts')

    /** @type {{name:string,type:string,componentName:string}[]} */
    const icons = []

    fs.readdirSync(dir).forEach((filename) => {
      const name = path.basename(filename, path.extname(filename))
      const componentName = pascalCase(type + '-' + name)
      const componentContent = `
      import { defineComponent } from "vue"
      import svg from "${slash(path.resolve(`packages/pepicons/src/icons/${type}/${name}`))}"
      import { baseProps, createSetup } from "../../component"

      export default defineComponent({
        name: "${componentName}",
        props: {...baseProps},
        setup: createSetup(svg)
      })
      `
      const componentPath = path.join(PATH_VUE, 'src/icons', type, filename)

      fs.outputFileSync(componentPath, componentContent)
      icons.push({ name, type, componentName })
    })

    iconsIndexContent += `
    export const ${type}Icons = {
      ${icons
        .map((icon) => `'${icon.name}': () => import("./${icon.type}/${icon.name}")`)
        .join(',\n')}
    }

    ${icons
      .map((icon) => {
        return `export { default as ${icon.componentName} } from "./${icon.type}/${icon.name}"`
      })
      .join('\n')}
    `
  })

  fs.outputFileSync(iconsIndexPath, iconsIndexContent)
}
