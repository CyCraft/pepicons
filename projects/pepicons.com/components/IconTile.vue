<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import { PepiconName, synonyms } from 'pepicons'
import { computed } from 'vue'
import { cleanupForSearch } from '../helpers/search'
const props = defineProps<{
  name: PepiconName
  type: 'pop' | 'print' | 'pencil'
  color: string
  shadow?: string
  opacity?: number
  searchInput?: string
}>()

const searchInputSynonymHit = computed(() => {
  const searchText = cleanupForSearch(props.searchInput || '')
  if (!searchText) return undefined
  const _synonyms = synonyms[props.name] || []
  return _synonyms.find((s) => cleanupForSearch(s).includes(searchText))
})

const synonymHtml = computed(() => {
  if (!searchInputSynonymHit.value) return ''
  const text = searchInputSynonymHit.value.replace(
    props.searchInput || '',
    `<span class="c-old-tucan">${props.searchInput}</span>`,
  )
  return `<div class="c-washed-cloth" style="opacity: 0.8">${text}</div>`
})
</script>

<template>
  <div class="icon-tile cursor-zoom-in">
    <Pepicon
      class="_svg"
      :type="type"
      :color="color"
      :shadow="shadow"
      :opacity="opacity"
      :name="name"
      size="26px"
    />
    <div class="_name">
      <div :class="`c-letters ${synonymHtml ? 'ellipsis' : ''}`" style="max-width: 90%">
        {{ name }}
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
  ._svg
    flex: 1
  ._name
    height: 36px
    font-size: 12px
    line-height: 1.4em
    width: 100%
    text-align: center
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    flex-wrap: nowrap
</style>
