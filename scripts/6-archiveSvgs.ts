// require modules
import archiver from 'archiver'
import cpy from 'cpy'
import * as fs from 'fs'
import { resolve as pathResolve } from 'path'
import { PATH_PEPICONS, PATH_ROOT } from './helpers/filePathHelpers'
const PATH_TO_ARCHIVE = PATH_PEPICONS + '/svg'
const ZIP_NAME = 'PepiconSvgs.zip'

export async function archiveSvgs() {
  /**
   * All instructions belowe are directly copied and tweaked based on the archiver Readme:
   * https://github.com/archiverjs/node-archiver
   */

  // create a file to stream archive data to.
  const output = fs.createWriteStream(`./media/${ZIP_NAME}`)
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  })

  // listen for all archive data to be written
  // 'close' event is fired only when a file descriptor is involved
  output.on('close', function () {
    console.log(`${archive.pointer()} total bytes`)
    console.log('archiver has been finalized and the output file descriptor has closed.')
  })

  // This event is fired when the data source is drained no matter what was the data source.
  // It is not part of this library but rather from the NodeJS Stream API.
  // @see: https://nodejs.org/api/stream.html#stream_event_end
  output.on('end', function () {
    console.log('Data has been drained')
  })

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      // log warning
      console.error(err)
    } else {
      // throw error
      console.error(err)
      throw err
    }
  })

  // good practice to catch this error explicitly
  archive.on('error', function (err) {
    console.error(err)
    throw err
  })

  // pipe archive data to the file
  archive.pipe(output)

  // append files from a sub-directory, putting its contents at the root of archive
  archive.directory(PATH_TO_ARCHIVE, false)

  // finalize the archive (ie we are done appending files but streams have to finish yet)
  // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
  await archive.finalize()

  const from = `./media/${ZIP_NAME}`
  const to = pathResolve(PATH_ROOT, './projects/pepicons.com/public')
  await cpy(from, to)
  console.log(`✔ done`)
}
