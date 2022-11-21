<script lang="ts" setup>
import { choices, generatedConfig } from './mocks'
import Pickers from './Pickers.vue'
</script>
<template>
  <Pickers :choices="choices" :generatedConfig="generatedConfig" />
</template>
