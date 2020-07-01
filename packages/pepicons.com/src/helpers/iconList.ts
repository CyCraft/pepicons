export const iconList: {
  pop: string[]
  print: string[]
  printFilled: string[]
} = {
  pop: require.context('pepicons/svg/pop', true, /^\.\/.*(\.svg)$/).keys(),
  print: require.context('pepicons/svg/pop', true, /^\.\/.*(\.svg)$/).keys(),
  printFilled: require.context('pepicons/svg/pop', true, /^\.\/.*(\.svg)$/).keys(),
}
