<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import { Choices, GeneratedColors, RandomColorDic } from '../types'
import IconTile from './IconTile.vue'

const props = defineProps<{
  iconNames: PepiconName[]
  searchInput: string
  choices: Choices
  generatedColors: GeneratedColors
  randomColorDic: RandomColorDic
}>()
const emit = defineEmits(['click-tile'])

function clickTile(icon: string): void {
  emit('click-tile', icon)
}
</script>

<template>
  <transition-group class="icon-grid" name="anim-grid" tag="div">
    <div v-for="name in iconNames" :key="name" class="anim-grid-item">
      <IconTile
        :type="choices.type"
        :color="
          choices.colorOrigin === 'randomizer'
            ? randomColorDic[name]?.color || ''
            : generatedColors.color
        "
        :stroke="
          choices.colorOrigin === 'randomizer'
            ? randomColorDic[name]?.stroke || ''
            : generatedColors.stroke
        "
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
