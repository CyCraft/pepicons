<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import { onKeyStroke } from '@vueuse/core'
import { ref, watch } from 'vue'
import { Choices } from '../types'

const props = defineProps<{
  modelValue: string
  debounce: number
  choices: Choices
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()

const valueInner = ref<any>(props.modelValue)
const debounceInner = ref<number>(props.debounce)
const inputRef = ref<any>(null)
onKeyStroke(
  '/',
  (e) => {
    function elementFocusable(e: any): boolean {
      const querySelector = `
a[href]:not([tabindex='-1']),
input:not([disabled]):not([tabindex='-1']),
select:not([disabled]):not([tabindex='-1']),
textarea:not([disabled]):not([tabindex='-1']),
button:not([disabled]):not([tabindex='-1'])`
      return !!e?.matches(querySelector)
    }
    if (elementFocusable(document.activeElement)) return
    inputRef.value.focus()
  },
  { eventName: 'keyup' },
)
let timeout: any = null

watch(valueInner, (newVal, oldVal) => {
  const debounceMs = debounceInner.value
  if (debounceMs > 0) {
    clearTimeout(timeout)
    timeout = setTimeout(() => emitInput(newVal), debounceMs)
  } else {
    emitInput(newVal)
  }
})

function emitInput(newVal: any) {
  emit('update:modelValue', newVal)
}
</script>

<template>
  <div class="_wrapper">
    <input ref="inputRef" v-model="valueInner" class="_native-input" v-bind="$attrs" />

    <Pepicon
      class="icon"
      :name="'loop'"
      :type="choices.type"
      :color="choices.color"
      :shadow="choices.shadow"
      :opacity="choices.opacity"
      @click="() => inputRef?.focus()"
    />
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
._native-input
  all: unset
  box-sizing: border-box
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
    box-shadow: 0 0 0 2px v-bind('choices.color')

.dark-mode ._native-input
  background-color:#202020
  color: white

._native-input
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
.dark-mode ._native-input
  .q-field__control
    +C(background-color, moonlight)
  .q-field__control:hover
    +C(background-color, moonlight)
  &.q-field--focused
    .q-field__control
      +C(background-color, moonlight)
</style>
