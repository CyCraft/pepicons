<script lang="ts" setup>
import { ref } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import { cssVar } from '../helpers/colorHelpers'
import { Choices } from '../types'
import DialogWrapper from './DialogWrapper.vue'
import IconButton from './IconButton.vue'
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

const colorSelection = [
  cssVar('sig-purple'),
  cssVar('sig-green'),
  cssVar('sig-yellow'),
  cssVar('sig-blue'),
  cssVar('sig-pink'),
]

const colorPickerIsVisible = ref(false)

function changeColor(color: any) {
  const alpha = ''
  const newValue = color.hex + alpha
  emit('update:choices', { ...props.choices, color: newValue })
}

function setRandomColor() {
  console.log(`TODO  ~!!!! `)
}
</script>

<template>
  <Stack class="pickers pa-xs" classes="justify-center">
    <Stack class="picker" classes="justify-center">
      <Tooltip text="Print ❏">
        <IconButton
          icon="can"
          type="print"
          :color="choices.color"
          backgroundColor="white"
          :isActive="choices.type === 'print'"
          :activeColor="choices.color"
          animationClass="anime-shake"
          @click="() => emit('update:choices', { ...choices, type: 'print' })"
        />
      </Tooltip>
      <Tooltip text="Pop!">
        <IconButton
          icon="can"
          type="pop"
          :color="choices.color"
          backgroundColor="white"
          :isActive="choices.type === 'pop'"
          :activeColor="choices.color"
          animationClass="anime-shake"
          @click="() => emit('update:choices', { ...choices, type: 'pop' })"
        />
      </Tooltip>
    </Stack>

    <Stack class="picker" classes="justify-center">
      <IconButton
        v-for="c in colorSelection"
        :key="c"
        :backgroundColor="c"
        :isActive="true"
        @click="() => emit('update:choices', { ...choices, color: c })"
      />

      <IconButton :backgroundColor="'white'" @click="() => (colorPickerIsVisible = true)" />

      <IconButton :backgroundColor="'white'" :isActive="true" @click="() => setRandomColor()" />
    </Stack>

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

    <DialogWrapper :isVisible="colorPickerIsVisible" @close="colorPickerIsVisible = false">
      <ColorPicker
        :theme="'dark'"
        :color="'mediumslateblue'"
        @changeColor="(val) => changeColor(val)"
      />
    </DialogWrapper>
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
