<script lang="ts" setup>
import IconButton from './IconButton.vue'
</script>
<template>
  <IconButton
    icon="can"
    type="pop"
    color="red"
    stroke="black"
    backgroundColor="white"
    :isActive="true"
    :animation="{ class: 'anime-shake', duration: 3000 }"
  />
</template>
