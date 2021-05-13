import { moveSvgs } from './moveSvgs.js'
import { archiveSvgs } from './archiveSvgs.js'
import { cleanupSvgs } from './cleanupSvgs.js'
import { generateSvgStrings } from './generateSvgStrings.js'

/**
 * @returns {Promise<void>}
 */
const doAll = async () => {
  await moveSvgs()
  archiveSvgs()
  await cleanupSvgs()
  await generateSvgStrings()
}
await doAll()
