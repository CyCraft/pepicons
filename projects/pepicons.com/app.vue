<script lang="ts" setup>
import { pepiconArray, PepiconName, pepiconSvgString } from 'pepicons'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { getRandomColor } from './helpers/colorHelpers'
import { Choices, RandomColorDic } from './types'

const choices = ref<Choices>({
  type: 'pop',
  mode: 'light',
  color: '#AB92F0',
  colorOrigin: 'preset',
})

const pepiconRandomColorDic = ref<RandomColorDic>({})

function setRandomColors() {
  pepiconArray.forEach((iconName) => {
    pepiconRandomColorDic.value[iconName] = getRandomColor()
  })
}

watch(
  () => [choices.value.colorOrigin, choices.value.color],
  ([origin]) => {
    if (origin === 'randomizer') setRandomColors()
  },
)

onBeforeMount(() => {
  document.body.classList.add(`${choices.value.mode}-mode`)
})

watch(
  () => choices.value.mode,
  (mode) => {
    document.body.className = document.body.className.replace(/(dark|light)-mode/g, `${mode}-mode`)
  },
)

function getCursor(
  icon: PepiconName,
  fallback: 'pointer' | 'zoom-in' | 'n-resize' | 's-resize',
): string {
  let svgString = pepiconSvgString({
    name: icon,
    type: 'pop',
    color: choices.value.mode === 'dark' ? '#FAFAFA' : '#1D1D1D',
    size: '26px',
  }).replace(/\n/g, '')
  if (icon === 'color-picker') {
    svgString = svgString.replace(/style="/, 'style="transform:rotate(90deg);')
  }
  return `url("data:image/svg+xml,${encodeURI(svgString)}"), ${fallback}`
}

const cursorPointer = computed(() => getCursor('hand-point', 'pointer'))
const cursorZoomIn = computed(() => getCursor('loop-plus', 'zoom-in'))
const cursorArrowUp = computed(() => getCursor('arrow-up', 'n-resize'))
const cursorArrowDown = computed(() => getCursor('arrow-down', 's-resize'))
const cursorColorPicker = computed(() => getCursor('color-picker', 'pointer'))

const retroUnderlineStroke = computed(() => (choices.value.type === 'pop' ? 'none' : 'black'))
</script>

<template>
  <NuxtLayout :choices="choices">
    <NuxtPage v-model:choices="choices" :randomColorDic="pepiconRandomColorDic" />
  </NuxtLayout>
</template>

<style lang="sass">
@import './css/app.sass'

.cursor-pointer
  cursor: v-bind(cursorPointer) !important
.cursor-zoom-in
  cursor: v-bind(cursorZoomIn) !important
.cursor-arrow-up
  cursor: v-bind(cursorArrowUp) !important
.cursor-arrow-down
  cursor: v-bind(cursorArrowDown) !important
.cursor-color-picker
  cursor: v-bind(cursorColorPicker) !important

.retro-underline
  position: relative
  display: inline-block
  &::after, &::before
    content: ''
    position: absolute
    border-radius: 50px
    transform: rotate(181deg) translateY(-2px)
    transition: border-color 250ms
    width: 105%
  &::after
    bottom: 0
    left: -2px
    border-top: v-bind('retroUnderlineStroke') 2px solid
  &::before
    justify-content: bottom
    transform-origin: bottom
    bottom: 1px
    left: -2px
    border-bottom: v-bind('choices.color') 6px solid
</style>
