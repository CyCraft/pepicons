<template>
  <Stack v-if="kind === 'type'" classes="justify-center">
    <!-- <div class="text-subtitle1 mb-sm">
      {{ kind === 'type' ? 'Style' : kind }}
    </div> -->
    <IconButton
      iconName="pen"
      iconType="print"
      :iconColor="value.color"
      :isActive="value.type === 'print'"
      backgroundColor="white"
      @click="set('type', 'print')"
    />
    <IconButton
      iconName="pen"
      iconType="pop"
      :iconColor="value.color"
      :isActive="value.type === 'pop'"
      backgroundColor="white"
      @click="set('type', 'pop')"
    />
  </Stack>
  <Stack v-else-if="kind === 'color'" classes="justify-center">
    <IconButton
      v-for="c in colorSelection"
      :key="c"
      :backgroundColor="c"
      @click="set('color', c)"
      :isActive="value.color === c"
    />
    <IconButton
      :colorRing="true"
      iconName="color-picker"
      @click="openColorPicker"
      iconColor="#ffadad"
      iconType="print"
    />
    <IconButton
      :colorRing="true"
      iconName="refresh"
      @click="setRandomColor"
      iconColor="#ffadad"
      iconType="print"
    />
  </Stack>
  <Stack v-else-if="kind === 'background'" classes="justify-center">
    <IconButton
      backgroundColor="white"
      @click="set('background', 'white')"
      :class="`_background-picker ${value.background === 'white' ? 'thin-border--dark' : ''}`"
      iconName="sun-filled"
      iconColor="black"
      iconType="pop"
    />
    <IconButton
      :backgroundColor="nightfall"
      @click="set('background', nightfall)"
      :class="`_background-picker ${value.background === nightfall ? 'thin-border--light' : ''}`"
      iconName="moon-filled"
      iconColor="white"
      iconType="pop"
    />
  </Stack>
  <Stack v-else-if="kind === 'stroke'" classes="justify-center">
    <IconButton
      :colorRing="true"
      iconName="color-picker"
      @click="openColorPicker"
      iconColor="#e8e8e8"
      iconType="print"
    />
  </Stack>
</template>

<style lang="sass">
// .picker
._background-picker svg
  opacity: 0.1
</style>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from '@vue/composition-api'
import { Dialog, QColor } from 'quasar'
import DialogWrapper from '../dialogs/DialogWrapper.vue'
import IconButton from '../atoms/IconButton.vue'
import Stack from '../atoms/Stack.vue'
import { getRandomColor, cssVar } from '../../helpers/colorHelpers'
import { defaultsIconConfig, IconConfig } from '../../types'

export default defineComponent({
  name: 'Picker',
  components: { IconButton, Stack },
  props: {
    /**
     * @example 'type'
     */
    kind: {
      type: (String as unknown) as PropType<'type' | 'color' | 'background' | 'stroke'>,
      required: true,
    },
    /**
     * @type {{ type: 'pop' | 'print', color: string, background: string, stroke: string }}
     */
    value: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup(props, { emit }) {
    function set(prop: 'type' | 'color' | 'background' | 'stroke', value: string) {
      emit('input', { ...props.value, [prop]: value })
    }

    function setRandomColor() {
      const randomColor = getRandomColor()
      set('color', randomColor)
    }

    const nightfall = cssVar('nightfall')

    function openColorPicker() {
      Dialog.create({
        component: DialogWrapper,
        dialogProps: {
          style: props.value.background === nightfall ? `background: ${nightfall}` : '',
        },
        slotComponent: QColor,
        slotProps: {
          noFooter: true,
          flat: true,
          formatModel: 'hexa',
          value: props.value.color,
          default: props.value.color,
          dark: props.value.background === nightfall,
        },
        slotEvents: {
          change: (newVal: string) => set(props.kind, newVal),
        },
      })
    }

    const colorSelection = [
      cssVar('primary'),
      cssVar('sig-green'),
      cssVar('sig-yellow'),
      cssVar('sig-blue'),
      cssVar('sig-pink'),
    ]

    return { set, setRandomColor, openColorPicker, colorSelection, nightfall }
  },
})
</script>
