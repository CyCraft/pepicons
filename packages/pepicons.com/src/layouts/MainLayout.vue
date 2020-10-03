<template>
  <q-layout view="lhh Lpr lff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="pb-xxxl"></div>
    <q-footer class="footer">
      <div class="mb-md">
        Pepicons was made with 💜 by
        <PepLink href="https://cycraft.co" content="cycraft.co" retroUnderline />
      </div>
      <div>© Copyright Pepicons, {{ new Date().getFullYear() }}</div>
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
import PepLink from '../components/atoms/PepLink.vue'

export default {
  name: 'MainLayout',
  components: { PepLink },
  data() {
    return {}
  },
}
</script>
