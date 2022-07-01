<template>
  <div class="icon-tile">
    <Pepicon class="_svg" v-bind="(config as any)" size="26px" />
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
  height: auto
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

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Pepicon as PepiconType, synonyms } from 'pepicons'
import { Pepicon } from '@pepicons/vue'
import { cleanupForSearch } from '../helpers/search'
import { defaultsIconConfig, IconConfig } from '../types'

export default defineComponent({
  name: 'IconTile',
  components: { Pepicon },
  props: {
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    config: {
      type: Object as PropType<Partial<IconConfig>>,
      default: () => ({ ...defaultsIconConfig() }),
    },
    searchInput: { type: String, default: '' },
  },
  setup(props) {
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

    return { synonymHtml }
  },
})
</script>
