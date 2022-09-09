<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import { ref, computed, reactive } from 'vue'
import PepInput from './PepInput.vue'

const v = ref('')
function log() {
  console.log('blurred')
}
// const _ = reactive({
//       searchInput: hash || '',
//       config: defaultsIconConfig({ isDarkMode: false }),
//     })
// const configComputed = computed(() => {
//   const { type, color: _color, stroke: _stroke, isDarkMode } = _.config
//   const useColorAsStroke = type === 'print' && isDarkMode
//   const color = useColorAsStroke ? 'black' : _color
//   const stroke = useColorAsStroke ? _color : _stroke
//   return { type, color, stroke }
// })
const iconConfig = {
  name: 'loop' as PepiconName,
  type: 'print' as const,
  color: 'goldenrod',
  stroke: 'black',
}
</script>

<docs></docs>

<template>
  v-model: {{ v }}
  <div class="light-mode">
    <PepInput
      @blur="log"
      :color="iconConfig.color"
      v-model="v"
      :debounce="2"
      :iconConfig="iconConfig"
    />
  </div>
</template>
