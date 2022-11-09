<script lang="ts" setup>
import Picker from './Picker.vue'
import Stack from './Stack.vue'

// const props = defineProps<{}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Picker kind="type" @update:modelValue="(newVal) => $emit('update:modelValue', newVal)" />
    <Picker
      class="_middle-section"
      kind="color"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
    />
    <Picker kind="background" @update:modelValue="(newVal) => $emit('update:modelValue', newVal)" />
  </Stack>
</template>

<style lang="sass">
@import '../css/variables.sass'
.pickers
  ._middle-section
    flex: 1
    order: 3
    +media-sm(flex, 1)
    +media-sm(order, unset)
</style>
