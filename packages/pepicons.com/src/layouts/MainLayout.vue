<template>
  <q-layout view="hhh lpr fff" style="overflow-x: hidden">
    <header>
      <PepHero class="full-width mb-md">
        <!-- <PepHeaderDecoration /> -->
        <PepHeaderDecorationLight :isDarkMode="isDarkMode" />
      </PepHero>
    </header>
    <q-page-container>
      <router-view @set-is-dark-mode="(newVal) => (isDarkMode = newVal)" />
    </q-page-container>
    <div class="pb-xxxl"></div>
    <q-footer class="footer">
      <div class="mb-md">
        Pepicons was made with 💜 by
        <PepLink href="https://cycraft.co" content="cycraft.co" retroUnderline />
      </div>
      <div>© Copyright CyCraft, {{ new Date().getFullYear() }}</div>
    </q-footer>
  </q-layout>
</template>

<style lang="sass">
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

<script>
// import PepHeaderDecoration from '../components/atoms/PepHeaderDecoration.vue'
import PepHeaderDecorationLight from '../components/atoms/PepHeaderDecorationLight.vue'
import PepHero from '../components/atoms/PepHero.vue'
import PepLink from '../components/atoms/PepLink.vue'

export default {
  name: 'MainLayout',
  components: { PepHero, PepLink, PepHeaderDecorationLight /** PepHeaderDecoration */ },
  data() {
    return { isDarkMode: false }
  },
}
</script>
