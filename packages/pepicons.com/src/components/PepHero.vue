<template>
  <div class="pep-hero">
    <div class="absolute-overlay column flex-center"><slot /></div>
    <h1 class="_title"><span>Pep</span><span>icons</span></h1>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
=grid-lines($_color)
  background-image: linear-gradient(to right, #{$_color} 1px, transparent 1px), linear-gradient(to bottom, #{$_color} 1px, transparent 1px)
  background-position: -1px -1px
.pep-hero
  +grid-lines(transparentize($c-washed-cloth, 0.5))
.dark-mode
  .pep-hero
    +grid-lines(transparentize($c-old-tucan, 0.9))

// header and grid-lines heights
$h-xs: 15px
$h-sm: 20px
$h-md: 20px
$h-lg: 25px
.pep-hero
  background-size: $h-xs $h-xs
  +media-sm(background-size, $h-sm $h-sm)
  +media-md(background-size, $h-md $h-md)
  +media-lg(background-size, $h-lg $h-lg)
  height: $h-xs * 9 - 1
  +media-sm(height, $h-sm * 9 - 1)
  +media-md(height, $h-md * 9 - 1)
  +media-lg(height, $h-lg * 9 - 1)

// other
.pep-hero
  position: relative
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  flex-wrap: nowrap
  ._title
    // typography
    +val()
    letter-spacing: 2pt
    text-transform: uppercase
    text-align: center
    // fixes to line-height so that the h1 is the same height as the content
    line-height: 0.8em
    > span
      display: inline-block
      transform: translateY(13%)
    // text outline/shadow
    -webkit-text-stroke: 2px black
    text-stroke: 2px black
    +media-sm(-webkit-text-stroke, 3px black)
    +media-sm(text-stroke, 3px black)
    +media-lg(-webkit-text-stroke, 4px black)
    +media-lg(text-stroke, 4px black)
    font-size: 50px // iphone SE
    +media-xs(font-size, 60px)
    +media-sm(font-size, 80px)
    +media-md(font-size, 100px)
    +media-lg(font-size, 140px)
    > span:first-child
      +C(color, sig-red)
    > span:last-child
      +C(color, sig-blue)
</style>
