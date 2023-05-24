<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import IconGrid from './IconGrid.vue'
import { choices, randomColorDic } from './mocks'

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
  'file',
  'folder',
  'gear',
  'grab-handle',
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
  'wrench',
  'trash',
  'wifi',
]
</script>
<template>
  <IconGrid :iconNames="icons" searchInput="" :choices="choices" :randomColorDic="randomColorDic" />
</template>
