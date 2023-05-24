<script lang="ts" setup>
import CompanyLogo from './CompanyLogo.vue'

const props = defineProps<{
  name: string
  description: string
  color: string
  profileUrl: string
  profileImgStyle?: string
  links?: string[]
}>()
</script>

<template>
  <div class="profile-card pa-md">
    <div class="_svg-elements-outer">
      <div class="_svg-elements-inner" :style="`color: ${color}`">
        <svg
          :class="name[0] === 'A' ? '_circle' : '_square'"
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4L28.7567 0.520672L32.236 25.2774L7.47933 28.7567L4 4Z" fill="black" />
          <path
            d="M0.847081 7.63832L24.1184 4.36775L27.3889 27.6391L4.11765 30.9096L0.847081 7.63832Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
        <svg
          class="_mountain-left"
          width="22"
          height="32"
          viewBox="0 0 22 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0629757 7.619L7.91637 8.99312L4.76748 16.1065L12.3308 16.9574L8.94963 23.6516L16.3733 24.2505C16.3733 24.2505 13.8688 29.3299 13.0993 31.1381"
            fill="black"
          />
          <path
            d="M1.73503 4.27501L9.58843 5.64913L6.43953 12.7625L14.0029 13.6134L10.6217 20.3076L18.0454 20.9065C18.0454 20.9065 15.5408 25.9859 14.7713 27.7941"
            stroke="currentColor"
            stroke-width="1.50064"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          class="_triangle"
          width="82"
          height="35"
          viewBox="0 0 82 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.4134 9.94034L57.2458 11.6376L37.723 29.8429L37.4134 9.94034Z" fill="black" />
          <path
            d="M37.114 16.5595L37.7495 31.5622L52.0619 18.2388L37.114 16.5595ZM35.5338 14.8678L55.5462 17.1161L36.3845 34.9536L35.5338 14.8678Z"
            fill="currentColor"
          />
        </svg>
        <svg
          :class="name[0] === 'A' ? '_square' : '_circle'"
          width="31"
          height="25"
          viewBox="0 0 31 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 25C25.6274 25 31 19.4036 31 12.5C31 5.59644 25.6274 0 19 0C12.3726 0 7 5.59644 7 12.5C7 19.4036 12.3726 25 19 25Z"
            fill="black"
          />
          <path
            d="M11.5 23.25C17.4371 23.25 22.25 18.2132 22.25 12C22.25 5.7868 17.4371 0.75 11.5 0.75C5.56294 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.56294 23.25 11.5 23.25Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
        <svg
          class="_mountain-right"
          width="29"
          height="25"
          viewBox="0 0 29 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8689 18.0683L20.4838 21.0635L19.385 13.3657L12.523 16.6508L11.8432 9.18516L5.23307 12.6099C5.23307 12.6099 4.66552 6.97756 4.35995 5.03713"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.8689 13.0523L20.4838 16.0475L19.385 8.34968L12.523 11.6348L11.8432 4.16917L5.23307 7.59391C5.23307 7.59391 4.66552 1.96157 4.35995 0.0211362"
            fill="black"
          />
        </svg>
      </div>
    </div>
    <div class="_profile-pic my-md">
      <img :src="profileUrl" alt="Profile Picture" :style="profileImgStyle" />
    </div>
    <div class="pb-md text-h5 val" :style="`color: ${color}`">{{ name }}</div>
    <div class="_description-outer pb-md">
      <div class="_description text-wrap-all">{{ description }}</div>
    </div>

    <div v-if="links?.length" class="flex wrap justify-center gap-md">
      <a v-for="link in links" :key="link" class="_link cursor-pointer" :href="link">
        <CompanyLogo :name="(link.split('https://')[1].split('.')[0] as any)" />
      </a>
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'

.profile-card
  +C(background, white)
.dark-mode
  .profile-card
    +C(background, moonlight)
.profile-card
  width: 310px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  flex-wrap: nowrap
  border-radius: $md
  position: relative
  > *
    position: relative
    z-index: 1
  ._svg-elements-outer
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 0
  ._svg-elements-inner
    position: relative
    svg
      position: absolute
  ._square
    left: 15px
    top: 100px
  ._mountain-left
    left: 35px
    top: 40px
  ._triangle
    left: 55px
    top: 5px
  ._circle
    right: 30px
    top: 20px
  ._mountain-right
    right: 20px
    top: 120px
  ._profile-pic
    display: flex
    justify-content: center
    height: 130px
    width: 130px
    border-radius: 50%
    overflow: hidden
    > img
      height: 130px
      width: auto
  ._description
    text-align: left
    line-height: 40px
  ._link
    > *
      +C(color, washed-cloth)
</style>
