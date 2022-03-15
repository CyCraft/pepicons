<script lang="ts" setup>
import { ref } from 'vue'
import PepInput from './PepInput.vue'

const v = ref('')
</script>
<template>
  v-model: {{ v }}
  <div class="bg-black pa-md light-mode">
    <PepInput v-model="v" />
  </div>
  <div class="bg-black pa-md dark-mode">
    <PepInput v-model="v" />
  </div>
</template>
