<script lang="ts" setup>
import { choices, generatedColors } from './mocks'
import Pickers from './Pickers.vue'
</script>
<template>
  <Pickers :choices="choices" :generatedColors="generatedColors" />
</template>
