<template>
  <div class="icon-grid">
    <IconTile v-for="{ name, svg } in svgs" v-bind="{ name, svg }" />
  </div>
</template>

<style lang="sass">

.icon-grid
  display: grid
  min-width: 500px
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
  grid-auto-rows: 100px
  grid-gap: $lg
  > *
    width: 100%
    height: 100%
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { iconList } from '../helpers/iconList'
import { importPepicon } from '../helpers/importHelpers'
import IconTile from './IconTile.vue'

export default defineComponent({
  name: 'IconGrid',
  components: { IconTile },
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
      const [_category, _names] = fullPath.split('/')
      const [category] = _category.slice(1).split(']')
      const names = _names.replace('.svg', '').split('|')
      console.log(`category → `, category, `names → `, names)
      const [name] = names
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      importPepicon(fullPath).then(svg => svgs.push({ name, svg }))
    }

    return { svgs }
  },
})
</script>
