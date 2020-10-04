<template>
  <q-layout view="hhh lpr fff">
    <header>
      <PepHero class="full-width mb-md">
        <!-- in here I need only the animation layer without title and with transparent background -->
        <!-- <PepHeader class="full-width" :key="remountCount" /> -->
      </PepHero>
      <!-- <q-resize-observer @resize="onResize" /> -->
    </header>
    <q-page-container>
      <router-view />
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
  color: $c-letters
  opacity: 0.9
  background-color: white
.dark-mode
  .footer
    background-color: $c-moonlight
    color: white
</style>

<script>
// import PepHeader from '../components/atoms/PepHeader.vue'
import PepHero from '../components/atoms/PepHero.vue'
import PepLink from '../components/atoms/PepLink.vue'

export default {
  name: 'MainLayout',
  components: { PepHero, PepLink },
  data() {
    return { remountCount: 0 }
  },
  methods: {
    onResize({ width, height }) {
      const canvas = this.$el.querySelector('.pep-header canvas')
      if (!canvas) return
      canvas.width = width
      canvas.height = width * 0.3
      canvas.style.width = `${width}px`
      canvas.style.height = `${width * 0.3}px`
      this.$nextTick(() => {
        this.remountCount++
      })
    },
  },
}
</script>
