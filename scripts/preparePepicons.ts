import { generatePrintPopPencil } from './1-generatePrintPopPencil'
import { generateCircleRoundOff } from './2-generateCircleRoundOff'
import { generateSvgStrings } from './3-generateSvgStrings'
import { generateIndexFiles } from './4-generateIndexFiles'

async function preparePepicons() {
  await generatePrintPopPencil()
  await generateCircleRoundOff()
  await generateSvgStrings()
  await generateIndexFiles()
  // archiveSvgs()
  // await generateVueComponents()
}

preparePepicons()
  .then(() => {
    console.log(`Prepared Pepicons! 🎉`)
  })
  .catch((error) => {
    console.log(`Error!`, error)
  })
