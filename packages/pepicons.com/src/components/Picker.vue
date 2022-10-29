<script lang="ts" setup>
import { PropType, ref, defineComponent } from 'vue'
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
    type: String as PropType<'type' | 'color' | 'stroke' | 'modelValueisDarkMode' | 'background'>,
    required: true,
  },
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string} & { isDarkMode: boolean }}
   */
  modelValue: {
    type: Object as PropType<Partial<IconConfig> & { isDarkMode: boolean }>,
    default: () => ({ ...defaultsIconConfig({ isDarkMode: false }) }),
  },
  /**
   * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
   */
  configComputed: {
    type: Object as PropType<Partial<IconConfig>>,
    default: () => ({ ...defaultsIconConfig() }),
  },
})
const emit = defineEmits(['update:modelValue'])
function set(
  prop: 'type' | 'color' | 'stroke' | 'isDarkMode' | 'randomColor',
  value: string | boolean,
) {
  console.log(`[prop]: value → `, prop, value)
  emit('update:modelValue', { ...props.modelValue, [prop]: value })
  console.log(`{ ...props.modelValue, [prop]: value } → `, { ...props.modelValue })
}

function setRandomColor() {
  console.log('setRandomColor called')
  const randomColor = getRandomColor()
  set('color', randomColor)
  set('randomColor', true)
}
function setColor(c: string) {
  console.log('setColor called', c)
  set('color', c)
  set('randomColor', false)
}

const nightfall = cssVar('nightfall')
const moonlight = cssVar('moonlight')

function openColorPicker() {
  colorPickerIsVisible.value = true
}
let colorPickerIsVisible = ref(false)
function changeColor(color) {
  // const a = color.rgba.a
  // const alpha = a ? (Math.round((255 * a) / 100) | (1 << 8)).toString(16).slice(1) : ''
  const alpha = ''
  const newValue = color.hex + alpha
  set('color', newValue)
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
        @click="set('type', 'print')"
      />
    </Tooltip>
    <Tooltip text="Pop!">
      <IconButton
        :iconConfig="{ ...modelValue, name: 'can', type: 'pop' }"
        :backgroundColor="modelValue.isDarkMode ? moonlight : 'white'"
        :isActive="modelValue.type === 'pop'"
        animationClass="anime-shake"
        @click="set('type', 'pop')"
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
      :iconConfig="{ ...configComputed, name: 'color-picker' }"
      :backgroundColor="modelValue.isDarkMode ? moonlight : 'white'"
      :colorRing="true"
      @click="colorPickerIsVisible = true"
    />
    <IconButton
      :iconConfig="{ ...configComputed, name: 'refresh' }"
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
      @click="set('isDarkMode', false)"
    />
    <IconButton
      :backgroundColor="nightfall"
      class="_background-picker thin-border--light"
      :iconConfig="{ name: 'moon-filled', type: 'pop', color: 'white' }"
      @click="set('isDarkMode', true)"
    />
  </Stack>
  <Stack v-if="kind === 'stroke'" v-bind="$attrs" class="picker" classes="justify-center">
    <input type="color" @change="() => set('color', '#e2e2e2')" />
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
