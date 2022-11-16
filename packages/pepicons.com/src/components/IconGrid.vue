<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import { computed } from 'vue'
import { GeneratedConfig } from '../types'
import IconTile from './IconTile.vue'

const props = defineProps<{
  iconNames: PepiconName[]
  searchInput: string
  generatedConfig: GeneratedConfig
}>()
const emit = defineEmits(['click-tile'])

function clickTile(icon: string): void {
  emit('click-tile', icon)
}

const c = computed(() => props.generatedConfig)
</script>

<template>
  <transition-group class="icon-grid" name="anim-grid" tag="div">
    <div v-for="name in iconNames.slice(0, 1)" :key="name" class="anim-grid-item">
      <IconTile
        :type="c.type"
        :color="c.randomColor ? c.randDic[name]?.color || '' : c.color"
        :stroke="c.randomColor ? c.randDic[name]?.stroke || '' : c.stroke"
        :mode="c.mode"
        :name="name"
        :searchInput="searchInput"
        @click="() => clickTile(name)"
      />
    </div>
  </transition-group>
</template>

<style lang="sass">
@import '../css/variables.sass'
.icon-grid
  display: grid
  min-width: 300px
  justify-content: center
  grid-template-columns: repeat(auto-fit, 100px)
  grid-auto-rows: 100px
  grid-gap: $lg
.anim-grid-item
  width: 100px
  height: 100px
  transition: all 250ms
  opacity: 1
  > *
    height: 100%
    width: 100%
.anim-grid-enter, .anim-grid-leave-to
  opacity: 0
.anim-grid-leave-active
  display: none
</style>
