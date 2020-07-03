<template>
  <div class="flex q-pa-xl icon-grid">
    <div v-for="{ name, svg } in svgs" :key="name" class="_tile">
      <div v-html="svg" />
      <div class="_name">{{ name }}</div>
    </div>
  </div>
</template>

<style lang="sass">
.icon-grid
  ._tile
    height: auto
    display: flex
    flex-direction: column
    align-items: center
    margin: 20px
    ._name
      width: 32px
      font-size: 12px
      // overflow: hidden
      // text-overflow: ellipsis
      // white-space: nowrap
    svg
      width: 32px
      height: auto
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { iconList } from '../helpers/iconList'
import { importPepicon } from '../helpers/importHelpers'

export default defineComponent({
  name: 'IconGrid',
  props: {
    type: {
      type: String as PropType<'pop' | 'print'>,
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
      const fullPath = path.slice(2)
      const [_category, names] = fullPath.split('/')
      const [category] = _category.slice(1).split(']')
      console.log(`category → `, category)
      console.log(`names → `, names)
      const [name] = names.split('|')
      console.log(`name → `, name)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      importPepicon(fullPath).then(svg => svgs.push({ name, svg }))
    }

    return { svgs }
  },
})
</script>
