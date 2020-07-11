<template>
  <div class="my-component"></div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MyComponent',
  props: {
    title: { type: String, required: true },
  },
  setup (props) {
    return {}
  },
})
</script>
