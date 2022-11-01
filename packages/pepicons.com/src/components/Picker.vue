<script lang="ts" setup>
import { PropType, ref, defineComponent, computed } from 'vue'
import DialogWrapper from '../components/DialogWrapper.vue'
import IconButton from './IconButton.vue'
import Stack from './Stack.vue'
import { getRandomColor, cssVar } from '../helpers/colorHelpers'
import { defaultsIconConfig, IconConfig } from '../types'
import Tooltip from './Tooltip.vue'
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'

const props = defineProps({
  /**
   * @example 'type'
   */
  kind: {
    type: String as PropType<'type' | 'color' | 'stroke' | 'isDarkMode' | 'background'>,
    required: true,
  },
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string, randomColor: boolean, isDarkMode: boolean}
   */
  modelValue: {
    type: Object as PropType<IconConfig>,
    default: () => ({ ...defaultsIconConfig({ isDarkMode: false }) }),
  },
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string, randomColor: boolean, isDarkMode: boolean }}
   */
  configComputed: {
    type: Object as PropType<Partial<IconConfig>>,
    default: () => ({ ...defaultsIconConfig() }),
  },
})
const emit = defineEmits(['update:modelValue'])
const modelValueInner = ref(props.modelValue)
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
  <Stack v-if="kind === 'type'" v-bind="$attrs" class="picker" classes="justify-center">
    <Tooltip text="Print ❏">
      <!-- {{ modelValue }} -->
      <IconButton
        :iconConfig="{
          name: 'can',
          type: 'print',
          color: modelValue.isDarkMode ? 'black' : modelValue.color,
          stroke: modelValue.isDarkMode ? modelValue.color : 'black',
        }"
        :backgroundColor="modelValue.isDarkMode ? moonlight : 'white'"
        :isActive="modelValue.type === 'print'"
        :activeColor="modelValue.color"
        animationClass="anime-shake"
        @click="set([{ prop: 'type', value: 'print' }])"
      />
    </Tooltip>
    <Tooltip text="Pop!">
      <IconButton
        :iconConfig="{ ...modelValue, name: 'can', type: 'pop' }"
        :backgroundColor="modelValue.isDarkMode ? moonlight : 'white'"
        :isActive="modelValue.type === 'pop'"
        animationClass="anime-shake"
        @click="set([{ prop: 'type', value: 'pop' }])"
      />
    </Tooltip>
  </Stack>
  <Stack v-if="kind === 'color'" v-bind="$attrs" class="picker" classes="justify-center">
    <IconButton
      v-for="c in colorSelection"
      :key="c"
      :iconConfig="{ color: modelValue.color }"
      :backgroundColor="c"
      :isActive="modelValue.color === c && modelValue.randomColor === false"
      @click="setColor(c)"
    />
    <IconButton
      :iconConfig="{
        ...configComputed,
        name: 'color-picker',
        color: modelValue.isDarkMode && modelValue.type === 'print' ? 'black' : modelValue.color,
        stroke: modelValue.isDarkMode && modelValue.type === 'print' ? modelValue.color : 'black',
      }"
      :backgroundColor="modelValue.isDarkMode ? moonlight : 'white'"
      :colorRing="true"
      @click="colorPickerIsVisible = true"
    />
    <IconButton
      :iconConfig="{
        ...configComputed,
        name: 'refresh',
        color: modelValue.isDarkMode && modelValue.type === 'print' ? 'black' : modelValue.color,
        stroke: modelValue.isDarkMode && modelValue.type === 'print' ? modelValue.color : 'black',
      }"
      :backgroundColor="modelValue.isDarkMode ? moonlight : 'white'"
      :colorRing="true"
      :isActive="modelValue.randomColor"
      @click="setRandomColor"
    />
  </Stack>
  <Stack v-if="kind === 'background'" v-bind="$attrs" class="picker" classes="justify-center">
    <IconButton
      backgroundColor="white"
      class="_background-picker thin-border--dark"
      :iconConfig="{ name: 'sun-filled', type: 'pop', color: 'black' }"
      @click="set([{ prop: 'isDarkMode', value: false }])"
    />
    <IconButton
      :backgroundColor="nightfall"
      class="_background-picker thin-border--light"
      :iconConfig="{ name: 'moon-filled', type: 'pop', color: 'white' }"
      @click="set([{ prop: 'isDarkMode', value: true }])"
    />
  </Stack>
  <Stack v-if="kind === 'stroke'" v-bind="$attrs" class="picker" classes="justify-center">
    <input type="color" @change="() => set([{ prop: 'color', value: '#e2e2e2' }])" />
  </Stack>
  <DialogWrapper :isVisible="colorPickerIsVisible" @close="colorPickerIsVisible = false">
    <ColorPicker
      :theme="modelValue.isDarkMode === true ? 'dark' : 'light'"
      :color="modelValue.color"
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
