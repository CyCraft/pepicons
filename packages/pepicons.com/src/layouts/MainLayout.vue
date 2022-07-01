<template>
  <div style="overflow-x: hidden" class="wrapper">
    <header>
      <PepHero style="width: 100vw" class="full-width mb-md">
        <PepHeaderDecorationLight :isDarkMode="isDarkMode" />
      </PepHero>
    </header>
    <router-view @set-is-dark-mode="(newVal) => (isDarkMode = newVal)" />
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

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PepHero from '../components/PepHero.vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepLink from '../components/PepLink.vue'

export default defineComponent({
  name: 'MainLayout',
  props: {},
  setup(props) {
    const isDarkMode = ref(false)
    return { isDarkMode }
  },
  components: { PepHero, PepHeaderDecorationLight, PepLink },
})
</script>
