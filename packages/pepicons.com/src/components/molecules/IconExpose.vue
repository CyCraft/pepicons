<template>
  <div class="icon-expose"></div>
</template>

<style lang="sass">
// .icon-expose
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MyComponent',
  props: {
    title: { type: String, required: true },
  },
  setup() {
    return {}
  },
})
</script>
