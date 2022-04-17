<template>
  <div class="wrapper">
    <!-- <Pickers /> -->
    <!-- <Pepicon name="airplane" type="pop" color="red" /> -->
    <!-- :style="`${ rows === '1' ? 'resize: none' : '' }; height: ${textareaHeight}; min-height: 3.5rem;
    max-height: ${autogrowMaxHeight}rem`" -->

    <button
      :style="` background: ${color}; height: 1rem; width: 1rem`"
      @click="colorPickerIsVisible = !colorPickerIsVisible"
    />
    <DialogWrapper
      kind="colorPicker"
      @close="colorPickerIsVisible = false"
      :isVisible="colorPickerIsVisible"
    >
      <ColorPicker theme="dark" :color="color" @changeColor="changeColor" />
    </DialogWrapper>
  </div>
</template>

<style lang="sass">
// .my-component
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Pepicon } from '@pepicons/vue'
import PepHeaderDecorationLight from '../components/PepHeaderDecorationLight.vue'
import PepHero from '../components/PepHero.vue'
import ProfileCard from '../components/ProfileCard.vue'
import Tabs from '../components/Tabs.vue'
import Tooltip from '../components/Tooltip.vue'
import IconButton from '../components/IconButton.vue'
import { config } from '../components/mocks'
import Pickers from '../components/Pickers.vue'
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
import DialogWrapper from '../components/DialogWrapper.vue'

export default defineComponent({
  name: 'MyComponent',
  props: { Pepicon },
  setup(props) {
    const selectedTab = ref<'vue' | 'svg'>('vue')
    let colorPickerIsVisible = ref(false)
    const color = ref('#59c7f9')
    function changeColor(color) {
      const { r, g, b, a } = color.rgba
      color.value = `rgba(${r}, ${g}, ${b}, ${a})`
    }
    return { selectedTab, config, color, changeColor, colorPickerIsVisible }
  },
  components: {
    PepHeaderDecorationLight,
    PepHero,
    ProfileCard,
    Tabs,
    Tooltip,
    IconButton,
    Pickers,
    Pepicon,
    ColorPicker,
    DialogWrapper,
  },
})
</script>
<style lang="sass">
.wrapper
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100%
</style>
