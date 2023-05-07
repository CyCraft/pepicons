import { generatePrintPopPencil } from './1-generatePrintPopPencil'
import { generateCircleRoundOff } from './2-generateCircleRoundOff'
import { generateSvgStrings } from './3-generateSvgStrings'

async function preparePepicons() {
  await generatePrintPopPencil()
  await generateCircleRoundOff()
  await generateSvgStrings()
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
