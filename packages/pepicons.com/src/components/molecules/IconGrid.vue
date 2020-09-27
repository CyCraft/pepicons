<template>
  <transition-group class="icon-grid" name="anim-grid" tag="div">
    <IconTile
      class="anim-grid-item"
      v-for="name in iconNamesFiltered"
      :key="name"
      v-bind="{ name, color, type, stroke, darkMode }"
    />
  </transition-group>
</template>

<style lang="sass">

.icon-grid
  display: grid
  min-width: 500px
  justify-content: center
  grid-template-columns: repeat(auto-fit, 100px)
  grid-auto-rows: 100px
  grid-gap: $lg
  > *
    width: 100px
    height: 100px
.anim-grid-item
  transition: all 250ms
  opacity: 1
.anim-grid-enter, .anim-grid-leave-to
  opacity: 0
.anim-grid-leave-active
  display: none
</style>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { pop, print, popSynonyms, printSynonyms, PepiconPop, PepiconPrint } from 'pepicons'
import IconTile from '../atoms/IconTile.vue'

export default defineComponent({
  name: 'IconGrid',
  components: { IconTile },
  props: {
    type: {
      type: String as PropType<'pop' | 'print'>,
      default: 'pop',
    },
    color: { type: String },
    stroke: { type: String, default: 'black' },
    darkMode: { type: Boolean },
    filter: { type: String },
  },
  setup(props) {
    const iconSet = computed(() => (props.type === 'print' ? print : pop))
    const iconNames = computed(() => Object.keys(iconSet.value) as (PepiconPop | PepiconPrint)[])

    const synonyms = computed(() => (props.type === 'print' ? printSynonyms : popSynonyms))
    const iconNamesFiltered = computed(() =>
      !props.filter || (props.filter && !props.filter.trim())
        ? iconNames.value
        : iconNames.value.filter((iconName) => {
            const searchText = (props.filter as string).toLowerCase().trim()
            // @ts-ignore
            const _synonyms: string[] = synonyms.value[iconName]
            return (
              iconName.includes(searchText) || _synonyms?.some((syn) => syn.includes(searchText))
            )
          }),
    )

    return { iconNamesFiltered }
  },
})
</script>
