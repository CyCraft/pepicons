<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Tooltip from './Tooltip.vue'

export default defineComponent({
  setup(props, context) {
    return {}
  },
  components: { Tooltip },
})
</script>
<template><Tooltip> something </Tooltip></template>

<style lang="sass"></style>
