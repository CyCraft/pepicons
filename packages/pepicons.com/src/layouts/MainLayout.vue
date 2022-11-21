<script lang="ts" setup>
import { pepiconArray, PepiconName } from 'pepicons'
import { computed, ref, watch } from 'vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepHero from '../components/PepHero.vue'
import PepLink from '../components/PepLink.vue'
import { getRandomColor } from '../helpers/colorHelpers'
import { Choices, GeneratedConfig } from '../types'

const choices = ref<Choices>({
  type: 'print',
  mode: 'light',
  color: '#AB92F0',
  randomColor: null,
  colorPicker: false,
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
  () => choices.value.randomColor,
  () => setRandomColors(),
)

const generatedConfig = computed<GeneratedConfig>(() => {
  const { mode, type, color, randomColor, colorPicker } = choices.value

  const isDarkPrint = mode === 'dark' && type === 'print'

  const randomColorDic = Object.entries(pepiconRandomColorDic.value).reduce((result, keyVal) => {
    const [icon, randomColor] = keyVal

    result[icon] = {
      color: isDarkPrint ? 'black' : randomColor,
      stroke: isDarkPrint ? randomColor : 'black',
    }
    return result
  }, {})

  return {
    mode,
    type,
    color: isDarkPrint ? 'black' : color,
    stroke: isDarkPrint ? color : 'black',
    randomColor,
    colorPicker,
    randomColorDic,
  }
})

document.body.classList.add(`${choices.value.mode}-mode`)

watch(
  () => choices.value.mode,
  (mode) => {
    document.body.className = document.body.className.replace(/(dark|light)-mode/g, `${mode}-mode`)
  },
)
</script>

<template>
  <div style="overflow-x: hidden" class="wrapper">
    <header>
      <PepHero style="width: 100vw" class="full-width mb-md">
        <PepHeaderDecorationLight :isDarkMode="choices.mode === 'dark'" />
      </PepHero>
    </header>
    <router-view v-model:choices="choices" :generatedConfig="generatedConfig" />

    <div class="pb-xxxl"></div>
    <div class="footer">
      <div class="mb-md">
        Pepicons was made with 💜 by
        <PepLink
          href="https://cycraft.co"
          content="cycraft.co"
          retroUnderline
          :lineColor="choices.color"
        />
      </div>
      <div>© Copyright CyCraft, {{ new Date().getFullYear() }}</div>
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
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
