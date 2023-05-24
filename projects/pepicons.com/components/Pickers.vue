<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
import { cssVar, getRandomColor } from '../helpers/colorHelpers'
import { Choices } from '../types'
import DialogWrapper from './DialogWrapper.vue'
import IconButton from './IconButton.vue'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  choices: Choices
}>()

const emit = defineEmits<{
  (e: 'update:choices', payload: Choices): void
}>()

const nightfall = ref('#1D1D1D')
onMounted(() => (nightfall.value = cssVar('nightfall')))
const moonlight = ref('#202020')
onMounted(() => (moonlight.value = cssVar('moonlight')))

const colorSelection = ref(['#AB92F0', '#55BBC5', '#F7D570', '#5FA8EE', '#F092AD'])

onMounted(() => {
  colorSelection.value = [
    cssVar('sig-purple'),
    cssVar('sig-green'),
    cssVar('sig-yellow'),
    cssVar('sig-blue'),
    cssVar('sig-pink'),
  ]
})

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
  <div class="pickers pa-xs flex wrap justify-around gap-md">
    <div class="picker flex wrap justify-center gap-md">
      <Tooltip text="Pop!" backgroundColor="black" textColor="white">
        <IconButton
          icon="can"
          type="pop"
          :color="choices.color"
          :shadow="choices.shadow"
          :opacity="choices.opacity"
          :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
          :isActive="choices.type === 'pop'"
          :animation="{ class: 'anime-shake', duration: 500 }"
          @click="() => emit('update:choices', { ...choices, type: 'pop' })"
        />
      </Tooltip>
      <Tooltip text="Pencil_" backgroundColor="black" textColor="white">
        <IconButton
          icon="can"
          type="pencil"
          :color="choices.color"
          :shadow="choices.shadow"
          :opacity="choices.opacity"
          :activeColor="choices.color"
          :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
          :isActive="choices.type === 'pencil'"
          :animation="{ class: 'anime-shake', duration: 500 }"
          @click="() => emit('update:choices', { ...choices, type: 'pencil' })"
        />
      </Tooltip>
      <Tooltip text="Print ❏" backgroundColor="black" textColor="white">
        <IconButton
          icon="can"
          type="print"
          :color="choices.color"
          :shadow="choices.shadow"
          :opacity="choices.opacity"
          :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
          :isActive="choices.type === 'print'"
          :activeColor="choices.color"
          :animation="{ class: 'anime-shake', duration: 500 }"
          @click="() => emit('update:choices', { ...choices, type: 'print' })"
        />
      </Tooltip>
    </div>

    <div class="picker flex wrap justify-center gap-md">
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
        :color="choices.color"
        :shadow="choices.shadow"
        :opacity="choices.opacity"
        :isActive="choices.colorOrigin === 'picker'"
        :activeColor="choices.color"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        @click="() => (colorPickerIsVisible = true)"
      />

      <IconButton
        class="cursor-color-picker"
        icon="arrows-spin"
        :type="choices.type"
        :color="choices.color"
        :shadow="choices.shadow"
        :opacity="choices.opacity"
        :backgroundColor="choices.mode === 'light' ? 'white' : moonlight"
        :isActive="choices.colorOrigin === 'randomizer'"
        :activeColor="choices.color"
        @click="() => setRandomColor()"
      />
    </div>

    <div class="picker flex wrap justify-center gap-md">
      <IconButton
        backgroundColor="white"
        icon="sun"
        type="pop"
        color="black"
        class="_background-picker thin-border--dark"
        @click="() => emit('update:choices', { ...choices, mode: 'light' })"
      />
      <IconButton
        :backgroundColor="nightfall"
        icon="moon"
        type="pop"
        color="white"
        class="_background-picker thin-border--light"
        @click="() => emit('update:choices', { ...choices, mode: 'dark' })"
      />
    </div>

    <DialogWrapper :isVisible="colorPickerIsVisible" @close="colorPickerIsVisible = false">
      <ColorPicker
        :theme="choices.mode"
        :color="choices.color"
        @changeColor="(val) => pickColor(val)"
      />
    </DialogWrapper>
  </div>
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
