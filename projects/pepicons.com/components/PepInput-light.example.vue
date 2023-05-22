<script lang="ts" setup>
import { ref } from 'vue'
import { choices, generatedColors } from './mocks'
import PepInput from './PepInput.vue'

const value = ref('')
function log() {
  console.log('blurred')
}
</script>

<docs></docs>

<template>
  v-model: {{ value }}
  <div class="light-mode">
    <PepInput
      v-model="value"
      :choices="choices"
      :generatedColors="generatedColors"
      :debounce="2"
      @blur="log"
    />
  </div>
</template>
