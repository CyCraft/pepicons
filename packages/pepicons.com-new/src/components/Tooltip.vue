<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    backgroundColor: { type: String, default: '#fff' },
    textColor: { type: String, default: '#000' },
  },
  setup(props, context) {
    return {}
  },
})
</script>
<template>
  <div class="">
    <slot />
  </div>
</template>

<style lang="scss"></style>
