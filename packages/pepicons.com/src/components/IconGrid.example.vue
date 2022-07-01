<template>
  <IconGrid :iconNames="icons" :config="configComputed" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import IconGrid from './IconGrid.vue'

const icons = [
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
const configComputed = computed(() => {
  const type = 'print'
  const color = '#ab92f0'
  const stroke = '#01fa'

  return { type, color, stroke }
})
</script>
