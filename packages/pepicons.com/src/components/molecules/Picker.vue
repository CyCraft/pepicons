<template>
  <Stack class="picker" v-if="kind === 'type'" classes="justify-center">
    <!-- <div class="text-subtitle1 mb-sm">
      {{ kind === 'type' ? 'Style' : kind }}
    </div> -->
    <IconButton
      :iconConfig="{
        name: 'can',
        type: 'print',
        color: value.isDarkMode ? 'black' : value.color,
        stroke: value.isDarkMode ? value.color : 'black',
      }"
      :backgroundColor="value.isDarkMode ? moonlight : 'white'"
      :isActive="value.type === 'print'"
      :activeColor="value.color"
      animationClass="anime-shake"
      @click="set('type', 'print')"
      ><QTooltip
        anchor="top middle"
        self="bottom middle"
        transition-show="jump-up"
        transition-hide="jump-down"
        content-class="picker-tooltip _leftmost"
        >Print ❏</QTooltip
      ></IconButton
    >
    <IconButton
      :iconConfig="{ ...value, name: 'can', type: 'pop' }"
      :backgroundColor="value.isDarkMode ? moonlight : 'white'"
      :isActive="value.type === 'pop'"
      animationClass="anime-shake"
      @click="set('type', 'pop')"
      ><QTooltip
        anchor="top middle"
        self="bottom middle"
        transition-show="jump-up"
        transition-hide="jump-down"
        content-class="picker-tooltip"
        >Pop!</QTooltip
      ></IconButton
    >
  </Stack>
  <Stack class="picker" v-else-if="kind === 'color'" classes="justify-center">
    <IconButton
      v-for="c in colorSelection"
      :key="c"
      :iconConfig="{ color: value.color }"
      :backgroundColor="c"
      @click="set('color', c)"
      :isActive="value.color === c"
    />
    <IconButton
      :iconConfig="{ ...configComputed, name: 'color-picker' }"
      :backgroundColor="value.isDarkMode ? moonlight : 'white'"
      :colorRing="true"
      @click="openColorPicker"
    />
    <IconButton
      :iconConfig="{ ...configComputed, name: 'refresh' }"
      :backgroundColor="value.isDarkMode ? moonlight : 'white'"
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
    <IconButton
      :colorRing="true"
      @click="openColorPicker"
      :iconConfig="{ name: 'color-picker', color: '#e8e8e8', type: 'print' }"
    />
  </Stack>
</template>

<style lang="sass">
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
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { Dialog, QColor, QTooltip } from 'quasar'
import DialogWrapper from '../dialogs/DialogWrapper.vue'
import IconButton from '../atoms/IconButton.vue'
import Stack from '../atoms/Stack.vue'
import { getRandomColor, cssVar } from '../../helpers/colorHelpers'
import { defaultsIconConfig, IconConfig } from '../../types'

export default defineComponent({
  name: 'Picker',
  components: { IconButton, Stack, QTooltip },
  props: {
    /**
     * @example 'type'
     */
    kind: {
      type: String as PropType<'type' | 'color' | 'stroke' | 'isDarkMode'>,
      required: true,
    },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string} & { isDarkMode: boolean }}
     */
    value: {
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
    function set(prop: 'type' | 'color' | 'stroke' | 'isDarkMode', value: string) {
      emit('input', { ...props.value, [prop]: value })
    }

    function setRandomColor() {
      const randomColor = getRandomColor()
      set('color', randomColor)
    }

    const nightfall = cssVar('nightfall')
    const moonlight = cssVar('moonlight')

    function openColorPicker() {
      Dialog.create({
        component: DialogWrapper,
        dialogProps: {
          style: props.value.isDarkMode ? `background: ${nightfall}` : '',
        },
        slotComponent: QColor,
        slotProps: {
          noFooter: true,
          flat: true,
          formatModel: 'hexa',
          value: props.value.color,
          default: props.value.color,
          dark: props.value.isDarkMode,
        },
        slotEvents: {
          change: (newVal: string) => set(props.kind, newVal),
        },
      })
    }

    const colorSelection = [
      cssVar('sig-purple'),
      cssVar('sig-green'),
      cssVar('sig-yellow'),
      cssVar('sig-blue'),
      cssVar('sig-pink'),
    ]

    return { set, setRandomColor, openColorPicker, colorSelection, nightfall, moonlight }
  },
})
</script>
