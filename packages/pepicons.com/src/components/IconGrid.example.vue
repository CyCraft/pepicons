<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import IconGrid from './IconGrid.vue'
import { choices, generatedConfig, randomColorDic } from './mocks'

const icons: PepiconName[] = [
  'bluetooth',
  'chain',
  'checkmark',
  'cloud',
  'cloud-down',
  'cloud-up',
  'color-picker',
  'dots-x',
  'dots-y',
  'duplicate',
  'enter',
  'eye',
  'eye-closed',
  'eye-off',
  'file',
  'folder',
  'gear',
  'grab',
  'hash',
  'label',
  'leave',
  'list',
  'loop',
  'loop-minus',
  'loop-plus',
  'open',
  'power',
  'qr-code',
  'tool',
  'trash',
  'wifi',
]
</script>
<template>
  <IconGrid
    :iconNames="icons"
    searchInput=""
    :choices="choices"
    :generatedConfig="generatedConfig"
    :randomColorDic="randomColorDic"
  />
</template>
