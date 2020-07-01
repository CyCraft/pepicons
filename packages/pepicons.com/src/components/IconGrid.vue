<template>
  <div class="q-gutter-md flex q-pa-xl _grid">
    <div v-for="{ name, svg } in svgs" :key="name" v-html="svg"></div>
  </div>
</template>

<style lang="sass">
._grid
  > div
    svg
      width: 30px
      height: 30px
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { iconList } from '../helpers/iconList'
import { dynamicImport } from '../helpers/importHelpers'

export default defineComponent({
  name: 'IconGrid',
  props: {
    type: {
      type: String as PropType<'pop'>,
      default: 'pop',
    },
    iconPaths: {
      type: Array as PropType<string[]>,
      default: () => iconList.pop,
    },
  },
  setup (props) {
    const svgs: { name: string; svg: string }[] = []

    for (const path of props.iconPaths) {
      const name = path.slice(2)
      const fullPath = `${props.type}/${name}`
      dynamicImport(fullPath).then(svg => svgs.push({ name, svg }))
    }

    return { svgs }
  },
})
</script>
