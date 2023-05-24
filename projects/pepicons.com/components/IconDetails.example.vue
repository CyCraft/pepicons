<script lang="ts" setup>
import IconDetails from './IconDetails.vue'
import { choices, generatedColors, randomColorDic } from './mocks'
</script>

<docs darkPreview></docs>

<template>
  <IconDetails
    icon="airplane"
    :choices="choices"
    :generatedColors="generatedColors"
    :randomColorDic="randomColorDic"
  />
</template>
