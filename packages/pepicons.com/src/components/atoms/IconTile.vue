<template>
  <div class="icon-tile">
    <Pepicon class="_svg" :name="name" :type="type" :color="color" :stroke="stroke" size="26px" />
    <div class="_name">
      <div :class="`c-letters ${synonymHtml ? 'ellipsis' : ''}`" style="max-width: 90%">
        {{ name }}
      </div>
      <div v-if="synonymHtml" v-html="synonymHtml" />
    </div>
  </div>
</template>

<style lang="sass">
// $
.icon-tile
  background-color: white
.dark-mode
  .icon-tile
    background-color: $c-moonlight
.icon-tile
  transition: background-color 500ms
  border-radius: $border-radius
  height: auto
  display: flex
  flex-direction: column
  align-items: center
  ._svg
    cursor: zoom-in
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
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { Pepicon as PepiconType, synonyms } from 'pepicons'
import { Pepicon } from 'vue-pepicons'
import { cleanupForSearch } from '../../helpers/search'

export default defineComponent({
  name: 'IconTile',
  components: { Pepicon },
  props: {
    /**
     * @example 'airplane'
     */
    name: { type: String as PropType<PepiconType>, required: true },
    color: { type: String, default: '#AB92F0' },
    type: { type: String, default: 'print' },
    stroke: { type: String, default: 'black' },
    searchInput: { type: String, default: '' },
  },
  setup(props) {
    const searchInputSynonymHit = computed(() => {
      const searchText = cleanupForSearch(props.searchInput)
      if (!searchText) return undefined
      const _synonyms = synonyms[props.name] || []
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

    return {
      synonymHtml,
    }
  },
})
</script>
