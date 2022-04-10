<script lang="ts" setup>
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
</script>
<template>
  v-model: {{ v }}
  <div class="bg-black pa-md light-mode">
    <PepInput
      @blur="log"
      v-model="v"
      :debounce="2"
      :iconConfig="{ ...configComputed, name: 'loop' }"
    />
  </div>
</template>
