<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
import DialogWrapper from '../components/DialogWrapper.vue'
import { cssVar, getRandomColor } from '../helpers/colorHelpers'
import IconButton from './IconButton.vue'
import Stack from './Stack.vue'

const props = defineProps<{
  /**
   * @example 'type'
   */
  kind: 'type' | 'color' | 'stroke' | 'isDarkMode' | 'background'
}>()

const emit = defineEmits(['update:modelValue'])
const modelValueInner = ref('')

function set(
  payloadArray: {
    prop: 'type' | 'color' | 'stroke' | 'isDarkMode' | 'randomColor'
    value: string | boolean
  }[],
) {
  for (const element of payloadArray) {
    const payloadObject = element
    modelValueInner.value[payloadObject.prop.toString()] = payloadObject.value
  }
  return emit('update:modelValue', modelValueInner.value)
}

const randomColor = getRandomColor()
function setRandomColor() {
  set([
    { prop: 'color', value: randomColor },
    { prop: 'randomColor', value: true },
  ])
}
function setColor(c: string) {
  set([
    { prop: 'color', value: c },
    { prop: 'randomColor', value: false },
  ])
}

const nightfall = cssVar('nightfall')
const moonlight = cssVar('moonlight')

let colorPickerIsVisible = ref(false)
function changeColor(color: any) {
  const alpha = ''
  const newValue = color.hex + alpha
  set([{ prop: 'color', value: newValue }])
}

const colorSelection = [
  cssVar('sig-purple'),
  cssVar('sig-green'),
  cssVar('sig-yellow'),
  cssVar('sig-blue'),
  cssVar('sig-pink'),
]
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <Stack v-if="kind === 'color'" v-bind="$attrs" class="picker" classes="justify-center">
    <IconButton
      v-for="c in colorSelection"
      :key="c"
      :backgroundColor="c"
      :isActive="true"
      @click="setColor(c)"
    />
    <IconButton :backgroundColor="'white'" @click="colorPickerIsVisible = true" />
    <IconButton :backgroundColor="'white'" :isActive="true" @click="setRandomColor" />
  </Stack>

  <Stack v-if="kind === 'stroke'" v-bind="$attrs" class="picker" classes="justify-center">
    <input type="color" @change="() => set([{ prop: 'color', value: '#e2e2e2' }])" />
  </Stack>
  <DialogWrapper :isVisible="colorPickerIsVisible" @close="colorPickerIsVisible = false">
    <ColorPicker
      :theme="'dark'"
      :color="'mediumslateblue'"
      @changeColor="(val) => changeColor(val)"
    />
  </DialogWrapper>
</template>

<style lang="sass">
@import '../css/variables.sass'
.picker
  ._background-picker svg
    opacity: 0.1
.picker-tooltip
  font-size: 1.5em
  +pa($md)
  +C(background, primary)
  border-radius: $md
  font-weight: 500
  white-space: nowrap

.hu-color-picker
  .color-set
    justify-content: space-evenly
  .color-alpha
    display: none
</style>
