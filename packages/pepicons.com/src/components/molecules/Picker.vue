<template>
  <div class="picker column flex-center">
    <div class="text-subtitle1 text-capitalize mb-md c-letters">
      {{ kind === 'type' ? 'Style' : kind }}
    </div>
    <div v-if="kind === 'type'" class="flex q-gutter-md">
      <OptionBox
        iconName="pen"
        iconType="print"
        :iconColor="value.color"
        :isActive="value.type === 'print'"
        backgroundColor="white"
        @click="set('type', 'print')"
      />
      <OptionBox
        iconName="pen"
        iconType="pop"
        :iconColor="value.color"
        :isActive="value.type === 'pop'"
        backgroundColor="white"
        @click="set('type', 'pop')"
      />
    </div>
    <div v-if="kind === 'color'" class="flex q-gutter-md">
      <OptionBox
        v-for="c in colorSelection"
        :key="c"
        :backgroundColor="c"
        @click="set('color', c)"
        :isActive="value.color === c"
      />
      <OptionBox
        :colorRing="true"
        iconName="color-picker"
        @click="openColorPicker"
        iconColor="#ffadad"
        iconType="print"
      />
      <OptionBox
        :colorRing="true"
        iconName="refresh"
        @click="setRandomColor"
        iconColor="#ffadad"
        iconType="print"
      />
    </div>
    <div v-if="kind === 'background'" class="flex q-gutter-md">
      <OptionBox
        backgroundColor="white"
        @click="set('background', 'white')"
        :class="`_background-picker ${value.background === 'white' ? 'thin-border--light' : ''}`"
        iconName="sun-filled"
        iconColor="black"
        iconType="pop"
      />
      <OptionBox
        :backgroundColor="nightfall"
        @click="set('background', nightfall)"
        :class="`_background-picker ${value.background === nightfall ? 'thin-border--dark' : ''}`"
        iconName="moon-filled"
        iconColor="white"
        iconType="pop"
      />
    </div>
    <div v-if="kind === 'stroke'" class="flex q-gutter-md">
      <OptionBox
        :colorRing="true"
        iconName="color-picker"
        @click="openColorPicker"
        iconColor="#e8e8e8"
        iconType="print"
      />
    </div>
  </div>
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
import OptionBox from '../atoms/OptionBox.vue'
import { getRandomColor, cssVar } from '../../helpers/colorHelpers'

export default defineComponent({
  name: 'Picker',
  components: { OptionBox },
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
      type: Object,
      default: () => ({
        type: 'pop',
        color: '#AB92F0',
        background: 'white',
      }),
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

    const colorSelection = [cssVar('primary'), '#55BBC5', '#F7D570', '#5FA8EE', '#F092AD']

    return { set, setRandomColor, openColorPicker, colorSelection, nightfall }
  },
})
</script>
