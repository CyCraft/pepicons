<script lang="ts" setup>
import { cssVar } from '../helpers/colorHelpers'
import { Choices } from '../types'
import IconButton from './IconButton.vue'
import Picker from './Picker.vue'
import Stack from './Stack.vue'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  choices: Choices
}>()

const emit = defineEmits<{
  (e: 'update:choices', payload: Choices): void
}>()

const nightfall = cssVar('nightfall')
const moonlight = cssVar('moonlight')
</script>

<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Stack class="picker" classes="justify-center">
      <Tooltip text="Print ❏">
        <IconButton
          icon="can"
          type="print"
          :color="'mediumslateblue'"
          backgroundColor="white"
          :isActive="true"
          :activeColor="'mediumslateblue'"
          animationClass="anime-shake"
          @click="() => emit('update:choices', { ...choices, type: 'print' })"
        />
      </Tooltip>
      <Tooltip text="Pop!">
        <IconButton
          icon="can"
          type="pop"
          :color="'mediumslateblue'"
          backgroundColor="white"
          :isActive="false"
          :activeColor="'mediumslateblue'"
          animationClass="anime-shake"
          @click="() => emit('update:choices', { ...choices, type: 'pop' })"
        />
      </Tooltip>
    </Stack>

    <Picker
      class="_middle-section"
      kind="color"
      @update:modelValue="(newVal) => $emit('update:modelValue', newVal)"
    />

    <Stack class="picker" classes="justify-center">
      <IconButton
        backgroundColor="white"
        icon="sun-filled"
        type="pop"
        color="black"
        class="_background-picker thin-border--dark"
        @click="() => emit('update:choices', { ...choices, mode: 'light' })"
      />
      <IconButton
        :backgroundColor="nightfall"
        icon="moon-filled"
        type="pop"
        color="white"
        class="_background-picker thin-border--light"
        @click="() => emit('update:choices', { ...choices, mode: 'dark' })"
      />
    </Stack>
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
  ._background-picker svg
    opacity: 0.1
</style>
