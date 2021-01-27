const moveSvgs = require('./moveSvgs.js')
const archiveSvgs = require('./archiveSvgs.js')
const cleanupSvgs = require('./cleanupSvgs.js')
const generateSvgStrings = require('./generateSvgStrings.js')

;(async () => {
  await moveSvgs()
  await archiveSvgs()
  await cleanupSvgs()
  await generateSvgStrings()
})()
