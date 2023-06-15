import cpy from 'cpy'
import { deleteAsync } from 'del'
import { resolve as pathResolve } from 'path'
import { optimize } from 'svgo'
import { PATH_PEPICONS, PATH_ROOT } from './helpers/filePathHelpers'
import { globReplace } from './helpers/globReplace'

const deleteSvgFolder = () => deleteAsync(pathResolve(PATH_PEPICONS, './svg'))

function cleanupFilename(filename: string): string {
  return filename.replace(/^(.+?)(_.*)*\.svg$/, '$1.svg')
}

async function copySvgs() {
  await Promise.all([
    cpy(
      pathResolve(PATH_ROOT, './scripts/export/*pop/*.svg'),
      pathResolve(PATH_PEPICONS, './svg/pop/'),
      {
        flat: true,
        rename: cleanupFilename,
      },
    ),
    cpy(
      pathResolve(PATH_ROOT, './scripts/export/*print/*.svg'),
      pathResolve(PATH_PEPICONS, './svg/print/'),
      {
        flat: true,
        rename: cleanupFilename,
      },
    ),
    // copy print icons to the pencil folder to mutate them later
    // because we only keep the black line from the print icons to create the pencil icons
    cpy(
      pathResolve(PATH_ROOT, './scripts/export/*print/*.svg'),
      pathResolve(PATH_PEPICONS, './svg/pencil/'),
      {
        flat: true,
        rename: cleanupFilename,
      },
    ),
  ])
  // copy the `-filled` icons from the pop folder to the pencil folder
  // because we keep the entire pop icon for `-filled` to create the pencil icons
  await cpy(
    pathResolve(PATH_PEPICONS, './svg/pop/*-filled.svg'),
    pathResolve(PATH_PEPICONS, './svg/pencil/'),
    {
      rename: cleanupFilename,
    },
  )
}

async function cleanupAll() {
  // Due to usage of perhaps an old version of fastglob
  // we have to flip the slashes in this case for it to correctly grab the files
  const path = pathResolve(PATH_PEPICONS, './svg/**/*.svg').replace(/\\/g, '/')

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
  // Due to usage of perhaps an old version of fastglob
  // we have to flip the slashes in this case for it to correctly grab the files
  const path = pathResolve(PATH_PEPICONS, './svg/pencil/*.svg').replace(/\\/g, '/')
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
