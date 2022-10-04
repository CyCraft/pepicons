<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import { ref, computed, reactive } from 'vue'
import PepInput from './PepInput.vue'

const v = ref('')
function log() {
  console.log('blurred')
}

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
