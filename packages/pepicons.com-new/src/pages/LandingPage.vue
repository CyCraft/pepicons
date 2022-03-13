<template>
  <div class="my-component">LandingPage</div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import PepHero from '../components/PepHero.vue'

export default defineComponent({
  name: 'MyComponent',
  props: {},
  setup(props) {
    return {}
  },
  components: { PepHero },
})
</script>
