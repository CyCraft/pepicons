<script lang="ts" setup>
import { computed, PropType, watch, ref } from 'vue'
import { Pepicon as PepiconType, synonyms } from 'pepicons'
import { Pepicon } from '@pepicons/vue'
import { cleanupForSearch } from '../helpers/search'
import { defaultsIconConfig, IconConfig } from '../types'
import { getRandomColor } from '../helpers/colorHelpers'

const props = defineProps({
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string, randomColor: boolean, isDarkMode: boolean }}
   */
  config: {
    type: Object as PropType<Partial<IconConfig>>,
    default: () => ({ ...defaultsIconConfig() }),
  },
  searchInput: { type: String, default: '' },
})
const randomColor = ref<string>('')
watch(
  () => props.config.randomColor,
  (newVal) => {
    randomColor.value = getRandomColor()
    console.log(`props.config → `, props.config)
  },
)
const searchInputSynonymHit = computed(() => {
  const searchText = cleanupForSearch(props.searchInput)
  if (!searchText) return undefined
  const _synonyms = synonyms[props.config.name as PepiconType] || []
  return _synonyms.find((s) => cleanupForSearch(s).includes(searchText))
})
const synonymHtml = computed(() => {
  if (!searchInputSynonymHit.value) return ''
  const text = searchInputSynonymHit.value.replace(
    props.searchInput,
    `<span class="c-old-tucan">${props.searchInput}</span>`,
  )
  return `<div class="c-washed-cloth" style="opacity: 0.8">${text}</div>`
})
</script>
<template>
  <div class="icon-tile">
    <Pepicon
      class="_svg"
      v-bind="(config as any)"
      :color="
        !config.randomColor && !config.isDarkMode
          ? config.color
          : !config.randomColor && config.isDarkMode
          ? 'black'
          : config.randomColor && !config.isDarkMode
          ? randomColor
          : config.randomColor && config.isDarkMode
          ? 'black'
          : config.color
      "
      :stroke="
        !config.randomColor && !config.isDarkMode
          ? 'black'
          : config.randomColor && !config.isDarkMode
          ? 'black'
          : config.randomColor && config.isDarkMode
          ? randomColor
          : !config.randomColor && config.isDarkMode
          ? config.color
          : 'black'
      "
      size="26px"
    />
    <!-- :stroke="config.isDarkMode ? config.color : 'black'" -->
    <div class="_name">
      <div :class="`c-letters ${synonymHtml ? 'ellipsis' : ''}`" style="max-width: 90%">
        {{ config.name }}
      </div>
      <div v-if="synonymHtml" v-html="synonymHtml" />
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
.icon-tile
  +C(background-color, white)
.dark-mode
  .icon-tile
    +C(background-color, moonlight)
.icon-tile
  transition: background-color 500ms
  border-radius: $border-radius
  display: flex
  flex-direction: column
  align-items: center
  cursor: zoom-in
  ._svg
    flex: 1
  ._name
    height: 36px
    font-size: 12px
    line-height: 1.4em
    width: 100%
    text-align: center
    +flex-center
</style>
