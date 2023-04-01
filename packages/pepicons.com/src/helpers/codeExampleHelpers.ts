import { PepiconName } from 'pepicons'

export function generateVueCode(payload: {
  name: PepiconName
  type: 'pop' | 'print' | 'pencil'
  color: string
  stroke: string
  wrap: 'none' | 'circle' | 'ball' | 'off'
}): string {
  const strokeProp =
    payload.stroke && payload.stroke !== 'black' ? `\n    stroke="${payload.stroke}"` : ''
  const wrapProp = payload.wrap && payload.wrap !== 'none' ? `\n    wrap="${payload.wrap}"` : ''

  return `<script setup>
import { Pepicon } from '@pepicons\/vue'
<\/script>

<template>
  <Pepicon
    name="${payload.name}"
    type="${payload.type}"
    color="${payload.color}"${strokeProp}${wrapProp}
  />
<\/template>`
}
