<script lang="ts" setup>
import IconInfo from './IconInfo.vue'
import { choices, generatedColors, randomColorDic } from './mocks'
</script>

<docs darkExample></docs>

<template>
  <IconInfo
    icon="airplane"
    :choices="choices"
    :generatedColors="generatedColors"
    :randomColorDic="randomColorDic"
  />
</template>
