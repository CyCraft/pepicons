<script lang="ts" setup>
import IconDetails from './IconDetails.vue'
import { choices, randomColorDic } from './mocks'
</script>

<docs darkPreview></docs>

<template>
  <IconDetails icon="airplane" :choices="choices" :randomColorDic="randomColorDic" />
</template>
