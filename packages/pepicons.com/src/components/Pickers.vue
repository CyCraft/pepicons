<template>
  <div class="pickers">
    <Picker type="style" />
    <Picker type="color" />
    <Picker type="background" />
  </div>
</template>

<style lang="sass">
// .pickers
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import Picker from './Picker.vue'

export default defineComponent({
  name: 'Pickers',
  components: { Picker },
  props: {},
  setup (props) {
    return {}
  },
})
</script>
