import { generatePrintPopPencil } from './1-generatePrintPopPencil'
import { generateCircleFilledOff } from './2-generateCircleFilledOff'
import { generateSvgStrings } from './3-generateSvgStrings'
import { generateIndexFiles } from './4-generateIndexFiles'
import { generateVueComponents } from './5-generateVueComponents'
import { archiveSvgs } from './6-archiveSvgs'

async function preparePepicons() {
  console.log('🖨️  Generating Print Pop and Pencil')
  await generatePrintPopPencil()
  console.log('⭕ Generating Circle Round Off')
  await generateCircleFilledOff()
  console.log('🧵 Generating SVG Strings')
  await generateSvgStrings()
  console.log('📝 Generating Index Files')
  await generateIndexFiles()
  console.log('🖖 Generating Vue Files')
  await generateVueComponents()
  console.log('🗄️ Archiving SVGs')
  await archiveSvgs()
}

preparePepicons()
  .then(() => {
    console.log(`Prepared Pepicons! 🎉`)
  })
  .catch((error) => {
    console.log(`Error!`, error)
  })
