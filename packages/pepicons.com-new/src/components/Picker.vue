<template>
  <Stack class="picker" v-if="kind === 'type'" classes="justify-center">
    <!-- <div class="text-subtitle1 mb-sm">
      {{ kind === 'type' ? 'Style' : kind }}
    </div> -->
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
  <Stack class="picker" v-else-if="kind === 'color'" classes="justify-center">
    <IconButton
      v-for="c in colorSelection"
      :key="c"
      :iconConfig="{ color: modelValue.color }"
      :backgroundColor="c"
      @click="set('color', c)"
      :isActive="modelValue.color === c"
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
      @click="setRandomColor"
    />
  </Stack>
  <Stack class="picker" v-else-if="kind === 'background'" classes="justify-center">
    <IconButton
      backgroundColor="white"
      @click="set('isDarkMode', false)"
      class="_background-picker thin-border--dark"
      :iconConfig="{ name: 'sun-filled', type: 'pop', color: 'black' }"
    />
    <IconButton
      :backgroundColor="nightfall"
      @click="set('isDarkMode', true)"
      class="_background-picker thin-border--light"
      :iconConfig="{ name: 'moon-filled', type: 'pop', color: 'white' }"
    />
  </Stack>
  <Stack class="picker" v-else-if="kind === 'stroke'" classes="justify-center">
    <input type="color" @change="() => set('color', '#e2e2e2')" />
  </Stack>
  <DialogWrapper @close="colorPickerIsVisible = false" :isVisible="colorPickerIsVisible">
    <ColorPicker
      :theme="modelValue.isDarkMode === true ? 'dark' : 'light'"
      :color="modelValue.color"
      @changeColor="changeColor"
    />
    <!-- the dev version looks perfect, but this one not so much -->
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
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue'
import DialogWrapper from '../components/DialogWrapper.vue'
import IconButton from './IconButton.vue'
import Stack from './Stack.vue'
import { getRandomColor, cssVar } from '../helpers/colorHelpers'
import { defaultsIconConfig, IconConfig } from '../types'
import Tooltip from './Tooltip.vue'
import { ColorPicker } from 'vue-color-kit'

export default defineComponent({
  name: 'Picker',
  components: { IconButton, Stack, Tooltip, DialogWrapper, ColorPicker },
  inheritAttrs: false,
  props: {
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
      type: Object as PropType<IconConfig & { isDarkMode: boolean }>,
      default: () => ({ ...defaultsIconConfig({ isDarkMode: false }) }),
    },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    configComputed: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup(props, { emit }) {
    function set(prop: 'type' | 'color' | 'stroke' | 'isDarkMode', value: string | boolean) {
      emit('update:modelValue', { ...props.modelValue, [prop]: value })
    }

    function setRandomColor() {
      console.log('setRandomColor called')
      const randomColor = getRandomColor()
      set('color', randomColor)
    }

    const nightfall = cssVar('nightfall')
    const moonlight = cssVar('moonlight')

    function openColorPicker() {
      colorPickerIsVisible.value = true
    }
    // function openColorPicker() {
    //   Dialog.create({
    //     component: DialogWrapper,
    //     dialogProps: {
    //       style: props.modelValue.isDarkMode ? `background: ${nightfall}` : '',
    //     },
    //     slotComponent: QColor,
    //     slotProps: {
    //       noFooter: true,
    //       flat: true,
    //       formatModel: 'hexa',
    //       value: props.modelValue.color,
    //       default: props.modelValue.color,
    //       dark: props.modelValue.isDarkMode,
    //     },
    //     slotEvents: {
    //       change: (newVal: string) => set('color', newVal),
    //     },
    //   })
    // }
    let colorPickerIsVisible = ref(false)
    function changeColor(color) {
      const { r, g, b, a } = color.rgba
      set('color', `rgba(${r}, ${g}, ${b}, ${a})`)
    }

    const colorSelection = [
      cssVar('sig-purple'),
      cssVar('sig-green'),
      cssVar('sig-yellow'),
      cssVar('sig-blue'),
      cssVar('sig-pink'),
    ]

    return {
      set,
      setRandomColor,
      colorSelection,
      nightfall,
      moonlight,
      openColorPicker,
      colorPickerIsVisible,
      changeColor,
    }
  },
})
</script>
