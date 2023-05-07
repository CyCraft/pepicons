import cpy from 'cpy'
import replace from 'tiny-replace-files'
import { optimize } from 'svgo'
import { wrapWithCircle, wrapWithOff, wrapWithRound } from './helpers/wrapHelpers'

const PATH_PEPICONS = './packages/pepicons'

async function copyFiles() {
  const fromPrint = PATH_PEPICONS + '/svg/print/*.svg'
  const fromPop = PATH_PEPICONS + '/svg/pop/*.svg'
  const fromPencil = PATH_PEPICONS + '/svg/pencil/*.svg'
  await Promise.all([
    cpy(fromPrint, PATH_PEPICONS + '/svg/print/circle'),
    cpy(fromPop, PATH_PEPICONS + '/svg/pop/circle'),
    cpy(fromPencil, PATH_PEPICONS + '/svg/pencil/circle'),
    cpy(fromPrint, PATH_PEPICONS + '/svg/print/round'),
    cpy(fromPop, PATH_PEPICONS + '/svg/pop/round'),
    cpy(fromPencil, PATH_PEPICONS + '/svg/pencil/round'),
    cpy(fromPrint, PATH_PEPICONS + '/svg/print/off'),
    cpy(fromPop, PATH_PEPICONS + '/svg/pop/off'),
    cpy(fromPencil, PATH_PEPICONS + '/svg/pencil/off'),
    cpy(fromPrint, PATH_PEPICONS + '/svg/print/circle-off'),
    cpy(fromPop, PATH_PEPICONS + '/svg/pop/circle-off'),
    cpy(fromPencil, PATH_PEPICONS + '/svg/pencil/circle-off'),
  ])
}

async function mutate(
  type: 'print' | 'pop' | 'pencil',
  wrap: 'circle' | 'round' | 'off' | 'circle-off',
) {
  const path = PATH_PEPICONS + `/svg/${type}/${wrap}/*.svg`

  if (wrap === 'circle') {
    await replace({
      files: path,
      from: /([.\n\r\t\S\s]+)/gi,
      to: (match) => wrapWithCircle(match, type),
    })
  }

  if (wrap === 'round') {
    await replace({
      files: path,
      from: /([.\n\r\t\S\s]+)/gi,
      to: (match, path) => {
        const svg = wrapWithRound(match, type)
        if (type === 'print') {
          return optimize(svg, { path, plugins: ['removeHiddenElems'] }).data
        }
        return svg
      },
    })
  }

  if (wrap === 'off') {
    await replace({
      files: path,
      from: /([.\n\r\t\S\s]+)/gi,
      to: (match) => wrapWithOff(match, type),
    })
  }

  if (wrap === 'circle-off') {
    await replace({
      files: path,
      from: /([.\n\r\t\S\s]+)/gi,
      to: (match) => wrapWithCircle(wrapWithOff(match, type), type),
    })
  }
}

export async function generateCircleRoundOff() {
  await copyFiles()
  await Promise.all([
    mutate('print', 'circle'),
    mutate('pop', 'circle'),
    mutate('pencil', 'circle'),
    mutate('print', 'round'),
    mutate('pop', 'round'),
    mutate('pencil', 'round'),
    mutate('print', 'off'),
    mutate('pop', 'off'),
    mutate('pencil', 'off'),
    mutate('print', 'circle-off'),
    mutate('pop', 'circle-off'),
    mutate('pencil', 'circle-off'),
  ])
}
