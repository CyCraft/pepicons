const svgs = require.context('pepicons/svg', true, /^\.\/.*(\.svg)$/).keys()

export const iconList: {
  pop: string[]
  print: string[]
} = {
  pop: svgs.filter(path => path.includes('pop/')),
  print: svgs.filter(path => path.includes('print/')),
}
