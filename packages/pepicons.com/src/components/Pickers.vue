<script lang="ts" setup>
import { ref } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import { cssVar, getRandomColor } from '../helpers/colorHelpers'
import { Choices, GeneratedColors } from '../types'
import DialogWrapper from './DialogWrapper.vue'
import IconButton from './IconButton.vue'
import Stack from './Stack.vue'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  choices: Choices
  generatedColors: GeneratedColors
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
function pickColor(color: any) {
  const alpha = ''
  const newValue = color.hex + alpha
  emit('update:choices', {
    ...props.choices,
    color: newValue,
    colorOrigin: 'picker',
  })
}

function setRandomColor() {
  const randomColor = getRandomColor()
  emit('update:choices', {
    ...props.choices,
    color: randomColor,
    colorOrigin: 'randomizer',
  })
}
</script>

<template>
  <Stack class="pickers pa-xs" classes="justify-around">
    <Stack class="picker" classes="justify-center">
      <Tooltip text="Print ❏">
        <IconButton
          icon="can"
          type="print"
          :color="choices.mode === 'dark' ? 'black' : choices.color"
          :stroke="choices.mode === 'dark' ? choices.color : 'black'"
          :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
          :isActive="choices.type === 'print'"
          :activeColor="choices.color"
          :animation="{ class: 'anime-shake', duration: 500 }"
          @click="() => emit('update:choices', { ...choices, type: 'print' })"
        />
      </Tooltip>
      <Tooltip text="Pop!">
        <IconButton
          icon="can"
          type="pop"
          :color="choices.color"
          :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
          :isActive="choices.type === 'pop'"
          :animation="{ class: 'anime-shake', duration: 500 }"
          @click="() => emit('update:choices', { ...choices, type: 'pop' })"
        />
      </Tooltip>
    </Stack>

    <Stack class="picker" classes="justify-center">
      <IconButton
        :color="choices.mode === 'dark' ? 'black' : choices.color"
        :stroke="choices.mode === 'dark' ? choices.color : 'black'"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        :isActive="choices.type === 'print'"
        :activeColor="choices.color"
        :animation="{ class: 'anime-shake', duration: 500 }"
        @click="() => emit('update:choices', { ...choices, type: 'print' })"
      />
      <IconButton
        icon="circle"
        type="pop"
        :color="choices.mode === 'dark' ? 'black' : choices.color"
        :stroke="choices.mode === 'dark' ? choices.color : 'black'"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        :isActive="choices.type === 'print'"
        :activeColor="choices.color"
        :animation="{ class: 'anime-shake', duration: 500 }"
        @click="() => emit('update:choices', { ...choices, type: 'print' })"
      />
      <IconButton
        icon="circle-filled"
        type="pop"
        :color="choices.color"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        :isActive="choices.type === 'pop'"
        :animation="{ class: 'anime-shake', duration: 500 }"
        @click="() => emit('update:choices', { ...choices, type: 'pop' })"
      />
      <IconButton
        icon="no-entry"
        type="pop"
        :color="choices.color"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        :isActive="choices.type === 'pop'"
        :animation="{ class: 'anime-shake', duration: 500 }"
        @click="() => emit('update:choices', { ...choices, type: 'pop' })"
      />
    </Stack>

    <Stack class="picker" classes="justify-center">
      <IconButton
        v-for="c in colorSelection"
        :key="c"
        class="cursor-color-picker"
        :backgroundColor="c"
        :isActive="choices.color === c && choices.colorOrigin === 'preset'"
        @click="() => emit('update:choices', { ...choices, color: c, colorOrigin: 'preset' })"
      />

      <IconButton
        class="cursor-color-picker"
        icon="color-picker"
        :type="choices.type"
        :color="generatedColors.color"
        :stroke="generatedColors.stroke"
        :isActive="choices.colorOrigin === 'picker'"
        :activeColor="choices.color"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        @click="() => (colorPickerIsVisible = true)"
      />

      <IconButton
        class="cursor-color-picker"
        icon="refresh"
        :type="choices.type"
        :color="generatedColors.color"
        :stroke="generatedColors.stroke"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        :isActive="choices.colorOrigin === 'randomizer'"
        :activeColor="choices.color"
        @click="() => setRandomColor()"
      />
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
        :theme="choices.mode"
        :color="choices.color"
        @changeColor="(val) => pickColor(val)"
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
