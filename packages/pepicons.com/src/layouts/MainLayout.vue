<template>
  <q-layout view="lhh Lpr lff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="pb-xxxl"></div>
    <q-footer class="footer">
      <div>Pepicons was made with 💜 by <a href="https://cycraft.co">cycraft.co</a></div>
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
  background: white !important
  opacity: 0.9
</style>

<script>
export default {
  name: 'MainLayout',

  components: {},

  data() {
    return {}
  },
}
</script>
