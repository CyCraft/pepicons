<template>
  <div class="my-component">
    <!-- <CompanyLogo name="twitter" size="sm" /> -->
    <HtmlButton kind="pop" color="red"/>
  </div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CompanyLogo from '../components/atoms/CompanyLogo.vue'
import HtmlButton from '../components/atoms/HtmlButton.vue'

export default defineComponent({
  name: 'MyComponent',
  props: {},
  setup(props) {
    return {}
  },
  components: { CompanyLogo, HtmlButton },
})
</script>
