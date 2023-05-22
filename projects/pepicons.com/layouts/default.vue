<script lang="ts" setup>
import PepHero from '../components/PepHero.vue'
import PepLink from '../components/PepLink.vue'
import { Choices } from '../types'

const props = defineProps<{
  choices: Choices
}>()
</script>

<template>
  <div style="overflow-x: hidden" class="wrapper">
    <header>
      <PepHero style="width: 100vw" class="full-width mb-md">
        <PepHeaderDecorationLight :isDarkMode="choices.mode === 'dark'" />
      </PepHero>
    </header>

    <slot />

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

.wrapper
  display: flex
  flex-direction: column
.footer
  +pa($xl)
  +t-body2()
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  flex-wrap: nowrap
  +C(color, letters)
  opacity: 0.9
  +C(background-color, white)
.dark-mode
  .footer
    +C(background-color, moonlight)
    +C(color, white)
</style>
