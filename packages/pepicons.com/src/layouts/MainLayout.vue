<script lang="ts" setup>
import { pepiconArray, PepiconName, pepiconSvgString } from 'pepicons'
import { computed, ref, watch } from 'vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepHero from '../components/PepHero.vue'
import PepLink from '../components/PepLink.vue'
import { getRandomColor } from '../helpers/colorHelpers'
import { Choices, GeneratedColors, RandomColorDic } from '../types'

const choices = ref<Choices>({
  type: 'print',
  mode: 'light',
  color: '#AB92F0',
  colorOrigin: 'preset',
})

const pepiconRandomColorDic = ref<{ [key in PepiconName]?: string }>({})
// you can pass this pepiconRandomColorDic
// you need to be able to easily set and reset every color in the `pepiconRandomColorDic`
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

const generatedColors = computed<GeneratedColors>(() => {
  const { mode, type, color } = choices.value
  return {
    color: mode === 'dark' && type === 'print' ? 'black' : color,
    stroke: mode === 'dark' && type === 'print' ? color : 'black',
  }
})

const randomColorDic = computed<RandomColorDic>(() =>
  Object.entries(pepiconRandomColorDic.value).reduce((result, keyVal) => {
    const { mode, type } = choices.value
    const [icon, randomColor] = keyVal

    result[icon] = {
      color: mode === 'dark' && type === 'print' ? 'black' : randomColor,
      stroke: mode === 'dark' && type === 'print' ? randomColor : 'black',
    }
    return result
  }, {}),
)

document.body.classList.add(`${choices.value.mode}-mode`)

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
    stroke: 'none',
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

const retroUnderlineStroke = computed(() =>
  choices.value.type === 'pop' ? 'none' : generatedColors.value.stroke,
)
</script>

<template>
  <div style="overflow-x: hidden" class="wrapper">
    <header>
      <PepHero style="width: 100vw" class="full-width mb-md">
        <PepHeaderDecorationLight :isDarkMode="choices.mode === 'dark'" />
      </PepHero>
    </header>

    <router-view
      v-model:choices="choices"
      :generatedColors="generatedColors"
      :randomColorDic="randomColorDic"
    />

    <div class="pb-xxxl"></div>
    <div class="footer">
      <div class="mb-md">
        Pepicons was made with 💜 by
        <PepLink href="https://cycraft.co" content="cycraft.co" class="retro-underline" />
      </div>
      <div>© Copyright CyCraft, {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
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
    border-bottom: v-bind('generatedColors.color') 6px solid

.wrapper
  display: flex
  flex-direction: column
.footer
  +pa($xl)
  +t-body2()
  +flex-center()
  +C(color, letters)
  opacity: 0.9
  +C(background-color, white)
.dark-mode
  .footer
    +C(background-color, moonlight)
    +C(color, white)
</style>
