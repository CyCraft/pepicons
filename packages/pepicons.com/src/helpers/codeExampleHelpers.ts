import { PepiconName } from 'pepicons'

export function generateVueCode(payload: {
  name: PepiconName
  type: 'pop' | 'print' | 'pencil'
  color: string
  stroke: string
  wrap?: 'circle' | 'round' | 'off' | 'circle-off'
}): string {
  const strokeProp =
    payload.stroke && payload.stroke !== 'black' ? `\n    stroke="${payload.stroke}"` : ''
  const suffix = payload.wrap ? `-${payload.wrap}` : ''

  return `<script setup>
import { Pepicon } from '@pepicons\/vue'
<\/script>

<template>
  <Pepicon
    name="${payload.name}${suffix}"
    type="${payload.type}"
    color="${payload.color}"${strokeProp}
  />
<\/template>`
}
