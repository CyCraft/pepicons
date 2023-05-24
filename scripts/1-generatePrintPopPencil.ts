import cpy from 'cpy'
import { deleteAsync } from 'del'
import { optimize } from 'svgo'
import { PATH_PEPICONS, PATH_ROOT } from './helpers/filePathHelpers'
import { globReplace } from './helpers/globReplace'

const deleteSvgFolder = () => deleteAsync(PATH_PEPICONS + '/svg')

function cleanupFilename(filename: string): string {
  return filename.replace(/^(.+?)(_.*)*\.svg$/, '$1.svg')
}

async function copySvgs() {
  await Promise.all([
    cpy(PATH_ROOT + '/scripts/export/*pop/*.svg', PATH_PEPICONS + '/svg/pop/', {
      flat: true,
      rename: cleanupFilename,
    }),
    cpy(PATH_ROOT + '/scripts/export/*print/*.svg', PATH_PEPICONS + '/svg/print/', {
      flat: true,
      rename: cleanupFilename,
    }),
    // copy print icons to the pencil folder to mutate them later
    // because we only keep the black line from the print icons to create the pencil icons
    cpy(PATH_ROOT + '/scripts/export/*print/*.svg', PATH_PEPICONS + '/svg/pencil/', {
      flat: true,
      rename: cleanupFilename,
    }),
  ])
  // copy the `-filled` icons from the pop folder to the pencil folder
  // because we keep the entire pop icon for `-filled` to create the pencil icons
  await cpy(PATH_PEPICONS + '/svg/pop/*-filled.svg', PATH_PEPICONS + '/svg/pencil/', {
    rename: cleanupFilename,
  })
}

async function cleanupAll() {
  const path = PATH_PEPICONS + '/svg/**/*.svg'

  // set color to `currentColor`
  await globReplace({
    files: path,
    from: /#AB92F0/gi,
    to: 'currentColor',
  })
  // set 'black' to 'currentColor' (for "print")
  await globReplace({
    files: path,
    from: /black/gi,
    to: 'currentColor',
  })
  // set opacity="0.8" to opacity="0.2" (for "print")
  await globReplace({
    files: path,
    from: /opacity="0?\.8"/gi,
    to: 'opacity="0.2"',
  })
  // remove clutter
  await globReplace({
    files: path,
    from: /<defs>\n<clipPath id="(.+?)">\n<rect width="20" height="20" fill="white"\/>\n<\/clipPath>\n<\/defs>/gi,
    to: '',
  })
  await globReplace({
    files: path,
    from: /<g clip-path="url\(\#(.+?)\)">/gi,
    to: '<g>',
  })
  // remove newlines
  await globReplace({
    files: path,
    from: /[\n\r]/gi,
    to: '',
  })
}

/**
 * - removes the shadow inherited from print icons
 * @see https://github.com/svg/svgo#built-in-plugins (svgo config)
 */
async function cleanupPencil() {
  const path = PATH_PEPICONS + '/svg/pencil/*.svg'
  await globReplace({
    files: path,
    from: /([.\n\r\t\S\s]*)/gi,
    to: (match, path) => {
      const svg = match.replaceAll(`opacity="0.2"`, `opacity="0"`)
      return optimize(svg, { path, plugins: ['removeHiddenElems'] }).data
    },
  })
}

export async function generatePrintPopPencil() {
  await deleteSvgFolder()
  await copySvgs()
  await cleanupAll()
  await cleanupPencil()
}
