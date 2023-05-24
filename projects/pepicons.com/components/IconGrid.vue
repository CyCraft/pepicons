<script lang="ts" setup>
import { PepiconName } from 'pepicons'
import { Choices, RandomColorDic } from '../types'
import IconTile from './IconTile.vue'

const props = defineProps<{
  iconNames: PepiconName[]
  searchInput: string
  choices: Choices
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
        :color="choices.colorOrigin === 'randomizer' ? randomColorDic[name] || '' : choices.color"
        :shadow="choices.colorOrigin === 'randomizer' ? undefined : choices.shadow"
        :opacity="choices.opacity"
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
  justify-items: center
  grid-template-columns: auto auto auto
  @media screen and (min-width: 400px)
    grid-template-columns: repeat(auto-fit, 100px)
  grid-auto-rows: 100px
  grid-gap: $md
  +media-xs(grid-gap, calc($md + $xs))
  +media-sm(grid-gap, $lg)
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
