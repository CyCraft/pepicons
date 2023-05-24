<script lang="ts" setup>
import { ref } from 'vue'
import PepInput from './PepInput.vue'
import { choices } from './mocks'

const value = ref('')
function log() {
  console.log('blurred')
}
</script>

<docs></docs>

<template>
  v-model: {{ value }}
  <div class="light-mode">
    <PepInput v-model="value" :choices="choices" :debounce="2" @blur="log" />
  </div>
</template>
