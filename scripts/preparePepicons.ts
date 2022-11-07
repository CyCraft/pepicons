import { archiveSvgs } from './archiveSvgs'
import { cleanupSvgs } from './cleanupSvgs'
import { generateSvgStrings } from './generateSvgStrings'
import { generateVueComponents } from './generateVueComponents'
import { moveSvgs } from './moveSvgs'

const doAll = async (): Promise<void> => {
  await moveSvgs()
  archiveSvgs()
  await cleanupSvgs()
  await generateSvgStrings()
  generateVueComponents()
}

doAll()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(`
==================
exited with error:
${error?.message || ''}
==================
full error:`)
    console.error(error)
    process.exit(1)
  })
