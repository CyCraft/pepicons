<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import { PepiconName, synonyms } from 'pepicons'
import { computed } from 'vue'
import { cleanupForSearch } from '../helpers/search'

const props = defineProps<{
  name: PepiconName
  type: 'pop' | 'print'
  color: string
  stroke: string
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
    <div style="flex: 1; display: flex; place-items: center">
      <div style="position: relative" class="_icon-wrapper">
        <!-- ✗ overlay for pop -->
        <svg
          style="position: absolute; width: 26px; height: 26px"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L1.29289 2.70711Z"
            fill="#AB92F0"
          />
        </svg>
        <!-- ✗ overlay for print -->
        <!--
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" fill="white" />
          <path
            d="M1.15063 1.87794C0.94979 1.6771 0.94979 1.35147 1.15063 1.15063C1.35147 0.949789 1.6771 0.949789 1.87794 1.15063L18.8494 18.1221C19.0502 18.3229 19.0502 18.6485 18.8494 18.8494C18.6485 19.0502 18.3229 19.0502 18.1221 18.8494L1.15063 1.87794Z"
            fill="black"
          />
        </svg> -->

        <Pepicon
          class="_svg"
          :type="type"
          :color="color"
          :stroke="stroke"
          :name="name"
          size="26px"
        />
      </div>
    </div>
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
._icon-wrapper
  border: 3px solid mediumslateblue
  border-radius: 100%
  padding: 4px
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
    +flex-center
</style>
