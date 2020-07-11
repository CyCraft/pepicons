<template>
  <svg viewBox="0 0 300 300" stroke-width="26" fill="none">
    <linearGradient id="linearColors1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#01E400"></stop>
      <stop offset="100%" stop-color="#FEFF01"></stop>
    </linearGradient>
    <linearGradient id="linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#FEFF01"></stop>
      <stop offset="100%" stop-color="#FF7E00"></stop>
    </linearGradient>
    <linearGradient id="linearColors3" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FF7E00"></stop>
      <stop offset="100%" stop-color="#FB0300"></stop>
    </linearGradient>
    <linearGradient id="linearColors4" x1="1" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#FB0300"></stop>
      <stop offset="100%" stop-color="#9B004A"></stop>
    </linearGradient>
    <linearGradient id="linearColors5" x1="0.5" y1="1" x2="0.5" y2="0">
      <stop offset="0%" stop-color="#9B004A"></stop>
      <stop offset="100%" stop-color="#7D0022"></stop>
    </linearGradient>
    <linearGradient id="linearColors6" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#7D0022"></stop>
      <stop offset="100%" stop-color="#01E400"></stop>
    </linearGradient>
    <path d="M150 10 a120 120 0 0 1 103.9230 60" stroke="url(#linearColors1)" />
    <path d="M253.9230 70 a120 120 0 0 1 0 120" stroke="url(#linearColors2)" />
    <path d="M253.9230 190 a120 120 0 0 1 -103.9230 60" stroke="url(#linearColors3)" />
    <path d="M150 250 a120 120 0 0 1 -103.9230 -60" stroke="url(#linearColors4)" />
    <path d="M46.077 190 a120 120 0 0 1 0 -120" stroke="url(#linearColors5)" />
    <path d="M46.077 70 a120 120 0 0 1 103.9230 -60" stroke="url(#linearColors6)" />
  </svg>
</template>

<script>
export default {
  name: 'ColorRingSvg',
}
</script>
