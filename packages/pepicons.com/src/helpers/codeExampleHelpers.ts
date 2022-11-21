import { PepiconName } from 'pepicons'

export function generateVueCode(payload: {
  name: PepiconName
  type: 'pop' | 'print'
  color: string
  stroke: string
}): string {
  const _stroke =
    payload.stroke && payload.stroke !== 'black' ? `\n    stroke="${payload.stroke}"` : ''

  return `<script setup>
import { Pepicon } from '@pepicons\/vue'
<\/script>

<template>
  <Pepicon
    name="${payload.name}"
    type="${payload.type}"
    color="${payload.color}"${_stroke}
  />
<\/template>`
}
