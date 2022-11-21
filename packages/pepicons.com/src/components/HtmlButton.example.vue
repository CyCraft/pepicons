<script lang="ts" setup>
import { ref } from 'vue'
import HtmlButton from './HtmlButton.vue'

const value = ref(false)
</script>
<template>
  <HtmlButton v-model="value" type="pop" color="mediumslateblue" stroke="black" />
</template>
