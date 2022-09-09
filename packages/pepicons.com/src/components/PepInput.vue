<script lang="ts">
import { Pepicon } from '@pepicons/vue'
import { defineComponent, PropType, computed, ref, watch } from 'vue'
import { defaultsIconConfig, IconConfig } from '../types'

export default defineComponent({
  name: 'PepInput',
  components: { Pepicon },
  props: {
    modelValue: { type: String, default: '' },
    color: { type: String, required: true },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    iconConfig: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
    debounce: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const valueInner = ref<any>(props.modelValue)
    let debounceInner: number = 0
    if (typeof props.debounce === 'number') {
      debounceInner = props.debounce
    }
    let timeout: any = null
    watch(valueInner, (newVal, oldVal) => {
      const debounceMs = debounceInner
      if (debounceMs > 0) {
        clearTimeout(timeout)
        timeout = setTimeout(() => emitInput(newVal), debounceMs)
      } else {
        emitInput(newVal)
      }
    })
    function emitInput(newVal: any) {
      let payload = newVal
      emit('update:modelValue', payload)
    }

    return { valueInner }
  },
})
</script>

<template>
  <div class="_wrapper">
    <input class="pep-input" v-bind="$attrs" v-model="valueInner" />
    <Pepicon class="icon" v-bind="iconConfig" />
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
._wrapper
  position: relative
  .icon
    position: absolute
    top: 50%
    left: 20px
    transform: translate(-50%, -50%)
.pep-input
  position: absolute
  all: unset
  outline: 2px solid transparent
  display: flex
  padding: 12px
  padding-left: 40px
  padding-right: 6px
  border-radius: 16px
  background-color: white
  width: 100%
  transition: all 200ms ease-in-out
  &:focus
    outline: 2px solid v-bind(color)

.dark-mode .pep-input
  background-color:#202020
  color: white

.pep-input
  .q-field__control
    transition: background-color 500ms
    border-radius: 16px
    +C(background-color, white)
  .q-field__control:before
    border: none
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1)
  .q-field__control:hover
    +C(background-color, white)
  &.q-field--focused
    .q-field__control
      +C(background-color, white)
.dark-mode .pep-input
  .q-field__control
    +C(background-color, moonlight)
  .q-field__control:hover
    +C(background-color, moonlight)
  &.q-field--focused
    .q-field__control
      +C(background-color, moonlight)
</style>
