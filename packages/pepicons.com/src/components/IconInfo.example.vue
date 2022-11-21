<script lang="ts" setup>
import IconInfo from './IconInfo.vue'
import { choices, generatedConfig, randomColorDic } from './mocks'
</script>

<docs darkExample></docs>

<template>
  <IconInfo
    icon="airplane"
    :choices="choices"
    :generatedConfig="generatedConfig"
    :randomColorDic="randomColorDic"
  />
</template>
