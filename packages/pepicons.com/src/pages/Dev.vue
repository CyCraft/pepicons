<script lang="ts" setup>
import { ref } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
import DialogWrapper from '../components/DialogWrapper.vue'

const selectedTab = ref<'vue' | 'svg'>('vue')
let colorPickerIsVisible = ref(false)
const color = ref('#59c7f9')
function changeColor(color) {
  const { r, g, b, a } = color.rgba
  color.value = `rgba(${r}, ${g}, ${b}, ${a})`
}
</script>
<template>
  <div class="wrapper">
    <button
      :style="` background: ${color}; height: 1rem; width: 1rem`"
      @click="colorPickerIsVisible = !colorPickerIsVisible"
    />
    <DialogWrapper :isVisible="colorPickerIsVisible" @close="colorPickerIsVisible = false">
      <ColorPicker theme="light" :color="color" @changeColor="changeColor" />
    </DialogWrapper>
  </div>
</template>

<style lang="sass">
.wrapper
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100%
</style>
