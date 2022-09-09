<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Stack',
  props: {
    /**
     * The component names you pass as 'component' need to be globally registered with `vue.component(name, comp)`!
     * Props are bound with `v-bind="props"`
     * Class and style are bound with `:class="class" :style="style"`
     * @type {{ component: string, props: { [propName: string]: any }, class?: any, style?: any }[]}
     * @example [{ component: 'StatsSummaryCard', props: { title: 'A', value: 100 } }, { component: 'StatsSummaryCard', props: { title: 'B', value: 250 } }]
     */
    tiles: {
      type: Array as PropType<
        { component: string; props: { [propName: string]: any }; class?: any; style?: any }[]
      >,
    },
    /**
     * The spacing between the stack tiles.
     * The beauty about this implementation of "gap" that the tiles are stacked with flexbox but the gap is applied similar to css grid, while keeping cross-browser compatibility.
     * @type {'md'}
     */
    gap: { type: String, default: 'md' },
    /**
     * The classes to be applied to the wrapper around your content
     * @example 'justify-between'
     */
    classes: { type: String, default: '' },
  },
})
</script>

<template>
  <div :class="`stack stack--${gap}`">
    <div :class="`_inner-wrap ${classes}`">
      <slot>
        <div class="_tile" v-for="(tile, index) in tiles" :key="tile.component + ':i:' + index">
          <component
            :is="tile.component"
            :class="tile.class"
            :style="tile.style"
            v-bind="tile.props"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
.stack
  ._inner-wrap
    display: flex
    flex-wrap: wrap
  &--md
    ._inner-wrap
      margin: calc(-#{$sm} / 2)
      +media-xs(margin, calc(-#{$md} / 2))
      > *
        margin: calc(#{$sm} / 2)
        +media-xs(margin, calc(#{$md} / 2))
  &--lg
    ._inner-wrap
      margin: calc(-#{$lg} / 2)
      +media-xs(margin, calc(-#{$xl} / 2))
      > *
        margin: calc(#{$lg} / 2)
        +media-xs(margin, calc(#{$xl} / 2))
</style>
