<script lang="ts" setup>
import { Choices } from 'src/types'
import { computed, ref, watch } from 'vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepHero from '../components/PepHero.vue'
import PepLink from '../components/PepLink.vue'

const isDarkMode = ref(false)
const choices = ref<Choices>({
  type: 'print',
  mode: 'light',
  color: '#AB92F0',
  randomColor: false,
  colorPicker: false,
})

const generatedConfig = computed<Choices>(() => {
  const { mode, type, color, randomColor, colorPicker } = choices.value
  return {
    mode,
    type,
    color: mode === 'light' ? color : 'black',
    stroke: mode === 'light' ? 'black' : color,
    randomColor,
    colorPicker,
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
        <PepHeaderDecorationLight :isDarkMode="isDarkMode" />
      </PepHero>
    </header>

    {{ choices }}

    <router-view v-model:choices="choices" />

    <div class="pb-xxxl"></div>
    <div class="footer">
      <div class="mb-md">
        Pepicons was made with 💜 by
        <PepLink href="https://cycraft.co" content="cycraft.co" retroUnderline />
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
