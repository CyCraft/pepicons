<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue'

export default defineComponent({
  name: 'IconExpose',
  props: {
    title: { type: String, required: true },
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <div class="icon-expose"></div>
</template>

<style lang="sass">
// .icon-expose
</style>
