<script lang="ts" setup>
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
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
      <div class="footer-links">
        <PepLink href="/privacy" content="Privacy" class="retro-underline" />
        <PepLink
          href="https://creativecommons.org/licenses/by/4.0/"
          content="License"
          class="retro-underline"
        />
      </div>
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
.footer-links
  display: flex
  gap: 24px
  padding-top: 16px
.dark-mode
  .footer
    +C(background-color, moonlight)
    +C(color, white)
</style>
