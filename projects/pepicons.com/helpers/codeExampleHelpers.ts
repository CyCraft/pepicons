import { PepiconName } from 'pepicons'

export function generateVueCode(payload: {
  name: PepiconName
  type: 'pop' | 'print' | 'pencil'
  color: string
  shadow?: string
  opacity?: number
}): string {
  const shadowProp = payload.shadow ? `\n    shadow="${payload.shadow}"` : ''
  const opacityProp = payload.opacity ? `\n    :opacity="${payload.opacity}"` : ''

  return `<script setup>
import { Pepicon } from '@pepicons\/vue'
<\/script>

<template>
  <Pepicon
    name="${payload.name}"
    type="${payload.type}"
    color="${payload.color}"${shadowProp}${opacityProp}
  />
<\/template>`
}
