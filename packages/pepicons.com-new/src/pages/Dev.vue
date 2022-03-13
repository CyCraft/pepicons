<template>
  <div style="position: relative" class="my-component">
    somethign
    <!-- <PepHero style="z-index: 10" />
    <PepHeaderDecorationLight style="position: absolute; top: 0" /> -->
  </div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pepicon } from '@pepicons/vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepHero from '../components/PepHero.vue'

export default defineComponent({
  name: 'MyComponent',
  props: { Pepicon },
  setup(props) {
    return {}
  },
  components: { PepHeaderDecorationLight, PepHero },
})
</script>
