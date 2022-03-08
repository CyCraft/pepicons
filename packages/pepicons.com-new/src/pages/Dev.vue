<template>
  <div class="my-component">
    <!-- <CompanyLogo name="twitter" size="sm" /> -->
    <!-- <IconTile
      :config="{
        name: 'something',
        type: 'pop',
        color: '#000',
        stroke: '#000',
      }"
    /> -->
    <!-- <PepHeaderDecorationLight /> -->
    dev
  </div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CompanyLogo from '../components/atoms/CompanyLogo.vue'
import IconTile from '../components/atoms/IconTile.vue'
import PepHeaderDecorationLight from '../components/atoms/PepHeaderDecorationLight.vue'

export default defineComponent({
  name: 'MyComponent',
  props: {},
  setup(props) {
    return {}
  },
  components: { CompanyLogo, IconTile, PepHeaderDecorationLight },
})
</script>
