<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { cssVar } from '../helpers/colorHelpers'

const randomAnimeFloatPerIcon = [
  8, // g
  3, //g
  18,
  0,
  24,
  5,
  15,
  8,
  9,
  17,
  10,
  16,
  7,
  0,
  11,
  1,
  14,
  19,
  2,
  14,
  18,
  14, // g
  23, // g
  6,
  9,
  18,
  22,
  24,
  19,
  24,
  14,
  7,
]

const props = defineProps({
  isDarkMode: { type: Boolean, default: false },
})

const shadowColor = computed(() => (props.isDarkMode ? 'black' : 'currentColor'))
const strokeColor = computed(() => (props.isDarkMode ? 'currentColor' : 'black'))

const colors = ref({
  green: '#55BBC5',
  yellow: '#F7D570',
  blue: '#5FA8EE',
  pink: '#F092AD',
})

onMounted(() => {
  colors.value = {
    green: cssVar('sig-green'),
    yellow: cssVar('sig-yellow'),
    blue: cssVar('sig-blue'),
    pink: cssVar('sig-pink'),
  }
  const shapes = document.querySelectorAll('.pep-header-decoration-light svg > g')
  // const shapes = this.$el.querySelectorAll('svg > g')
  shapes.forEach((g: any, index: number) => {
    g.classList.add(`anime-float`)
    g.classList.add(`anime-float-${randomAnimeFloatPerIcon[index]}`)
  })
})
</script>

<template>
  <div class="pep-header-decoration-light">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1158.942"
      height="143.376"
      viewBox="0 0 1158.942 143.376"
    >
      <g :style="`color: ${colors.green}`">
        <g id="グリーンギザギザ" transform="translate(-4 22.16)">
          <path
            id="グリーンギザギザ-2"
            data-name="グリーンギザギザ"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(-0.978, -0.208, 0.208, -0.978, 262.409, 88.324)"
            :fill="shadowColor"
          />
          <path
            id="グリーンギザギザ線"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(-0.978, -0.208, 0.208, -0.978, 262.409, 82.472)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルーギザギザ" transform="translate(7 23.16)">
          <path
            id="ブルーギザギザ-2"
            data-name="ブルーギザギザ"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(0.485, 0.875, -0.875, 0.485, 52.43, 55.879)"
            :fill="shadowColor"
          />
          <path
            id="ブルーギザギザ線"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(0.485, 0.875, -0.875, 0.485, 54.102, 52.535)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g id="イエローギザギザ" transform="translate(-3 10.16)">
          <path
            id="イエローギザギザ-2"
            data-name="イエローギザギザ"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="translate(126.805 45.742) rotate(-151)"
            :fill="shadowColor"
          />
          <path
            id="イエローギザギザ線"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="translate(126.805 50.758) rotate(-151)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルーギザギザ-3" data-name="ブルーギザギザ" transform="translate(24 26.16)">
          <path
            id="ブルーギザギザ-4"
            data-name="ブルーギザギザ"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(-0.934, 0.358, -0.358, -0.934, 323.494, 43.789)"
            :fill="shadowColor"
          />
          <path
            id="ブルーギザギザ線-2"
            data-name="ブルーギザギザ線"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(-0.934, 0.358, -0.358, -0.934, 323.494, 40.445)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンクギザギザ" transform="translate(-3 10.16)">
          <path
            id="ピンクギザギザ-2"
            data-name="ピンクギザギザ"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(-0.788, 0.616, -0.616, -0.788, 218.234, 50.748)"
            :fill="shadowColor"
          />
          <path
            id="ピンクギザギザ線"
            d="M0,6.2,5.007,0,9.7,6.2,14.109,0l4.214,6.2L22.444,0s3.227,4.651,4.435,6.2"
            transform="matrix(-0.788, 0.616, -0.616, -0.788, 218.234, 46.568)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンク丸" transform="translate(-3 -0.84)">
          <circle
            id="ピンク丸-2"
            data-name="ピンク丸"
            cx="15.5"
            cy="15.5"
            r="15.5"
            transform="translate(25.942 8.267)"
            :fill="shadowColor"
          />
          <g
            id="ピンク丸線"
            transform="translate(19.942 8.267)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <ellipse cx="16.5" cy="16" rx="16.5" ry="16" stroke="none" />
            <ellipse cx="16.5" cy="16" rx="15.75" ry="15.25" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g id="イエロー三角" transform="translate(4 34.16)">
          <path
            id="イエロー三角-2"
            data-name="イエロー三角"
            d="M19.647,0,39.294,21.737H0Z"
            transform="matrix(0.819, 0.574, -0.574, 0.819, 115.481, 57.175)"
            :fill="shadowColor"
          />
          <g
            id="イエロー三角線"
            transform="matrix(0.819, 0.574, -0.574, 0.819, 119.648, 60.519)"
            fill="none"
          >
            <path d="M19.647,0,39.294,21.737H0Z" stroke="none" />
            <path
              d="M 19.64711952209473 2.237003326416016 L 3.377677917480469 20.23723983764648 L 35.91656112670898 20.23723983764648 L 19.64711952209473 2.237003326416016 M 19.64711952209473 -1.9073486328125e-06 L 39.29423904418945 21.73723983764648 L 0 21.73723983764648 L 19.64711952209473 -1.9073486328125e-06 Z"
              stroke="none"
              :fill="strokeColor"
            />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.green}`">
        <g id="グリーン四角" transform="translate(21 13.16)">
          <rect
            id="グリーン四角-2"
            data-name="グリーン四角"
            width="25.081"
            height="25.081"
            transform="translate(123.204 13.511) rotate(-8)"
            :fill="shadowColor"
          />
          <g
            id="グリーン四角線"
            transform="translate(118.204 9.331) rotate(-8)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンク丸-3" data-name="ピンク丸" transform="translate(-8 26.16)">
          <circle
            id="ピンク丸-4"
            data-name="ピンク丸"
            cx="7.5"
            cy="7.5"
            r="7.5"
            transform="translate(184.391 72.267)"
            :fill="shadowColor"
          />
          <g
            id="ピンク丸線-2"
            data-name="ピンク丸線"
            transform="translate(187.382 74.267)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
            <circle cx="7.5" cy="7.5" r="6.75" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルー三角" transform="translate(11 0.16)">
          <path
            id="ブルー三角-2"
            data-name="ブルー三角"
            d="M19.647,0,39.294,21.737H0Z"
            transform="translate(228.395 26.799) rotate(-43)"
            :fill="shadowColor"
          />
          <g id="ブルー三角線" transform="translate(225.895 34.323) rotate(-43)" fill="none">
            <path d="M19.647,0,39.294,21.737H0Z" stroke="none" />
            <path
              d="M 19.64711952209473 2.237003326416016 L 3.377677917480469 20.23723983764648 L 35.91656112670898 20.23723983764648 L 19.64711952209473 2.237003326416016 M 19.64711952209473 -1.9073486328125e-06 L 39.29423904418945 21.73723983764648 L 0 21.73723983764648 L 19.64711952209473 -1.9073486328125e-06 Z"
              stroke="none"
              :fill="strokeColor"
            />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンク四角" transform="translate(21 44.16)">
          <rect
            id="ピンク四角-2"
            data-name="ピンク四角"
            width="25.081"
            height="25.081"
            transform="translate(318.765 57.173) rotate(25)"
            :fill="shadowColor"
          />
          <g
            id="ピンク四角線"
            transform="translate(321.273 63.026) rotate(25)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g id="イエロー丸" transform="translate(40 5.16)">
          <ellipse
            id="イエロー丸-2"
            data-name="イエロー丸"
            cx="10"
            cy="10.5"
            rx="10"
            ry="10.5"
            transform="translate(329.942 5.267)"
            :fill="shadowColor"
          />
          <g
            id="イエロー丸線"
            transform="translate(323.942 5.267)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <circle cx="10" cy="10" r="10" stroke="none" />
            <circle cx="10" cy="10" r="9.25" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルー四角" transform="translate(0 44.16)">
          <rect
            id="ブルー四角-2"
            data-name="ブルー四角"
            width="25.081"
            height="25.081"
            transform="translate(5.016 70.198) rotate(-8)"
            :fill="shadowColor"
          />
          <g
            id="ブルー四角線"
            transform="translate(0 74.378) rotate(-8)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.green}`">
        <g id="グリーン四角-3" data-name="グリーン四角" transform="translate(444 -5.84)">
          <rect
            id="グリーン四角-4"
            data-name="グリーン四角"
            width="25.081"
            height="25.081"
            transform="translate(123.204 13.511) rotate(-8)"
            :fill="shadowColor"
          />
          <g
            id="グリーン四角線-2"
            data-name="グリーン四角線"
            transform="translate(118.204 9.331) rotate(-8)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.green}`">
        <g
          id="グリーンギザギザ-3"
          data-name="グリーンギザギザ"
          transform="translate(1013.117 39.052)"
        >
          <path
            id="グリーンギザギザ-4"
            data-name="グリーンギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="translate(27.581 6.065) rotate(168)"
            :fill="shadowColor"
          />
          <path
            id="グリーンギザギザ線-2"
            data-name="グリーンギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="translate(27.581 11.917) rotate(168)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルーギザギザ-5" data-name="ブルーギザギザ" transform="translate(835.007 43.982)">
          <path
            id="ブルーギザギザ-6"
            data-name="ブルーギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(0.485, -0.875, 0.875, 0.485, 0, 23.509)"
            :fill="shadowColor"
          />
          <path
            id="ブルーギザギザ線-3"
            data-name="ブルーギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(0.485, -0.875, 0.875, 0.485, 1.672, 26.854)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g
          id="ピンクギザギザ-3"
          data-name="ピンクギザギザ"
          transform="matrix(0.883, 0.469, -0.469, 0.883, 470.194, 6.005)"
        >
          <path
            id="ピンクギザギザ-4"
            data-name="ピンクギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(0.485, -0.875, 0.875, 0.485, 0, 23.509)"
            :fill="shadowColor"
          />
          <path
            id="ピンクギザギザ線-2"
            data-name="ピンクギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(0.485, -0.875, 0.875, 0.485, 1.672, 26.854)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g
          id="イエローギザギザ-3"
          data-name="イエローギザギザ"
          transform="translate(881.295 88.618)"
        >
          <path
            id="イエローギザギザ-4"
            data-name="イエローギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(-0.875, 0.485, -0.485, -0.875, 26.515, 10.44)"
            :fill="shadowColor"
          />
          <path
            id="イエローギザギザ線-2"
            data-name="イエローギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(-0.875, 0.485, -0.485, -0.875, 26.515, 5.423)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルーギザギザ-7" data-name="ブルーギザギザ" transform="translate(1083.177 73.954)">
          <path
            id="ブルーギザギザ-8"
            data-name="ブルーギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="translate(25.094 15.422) rotate(-159)"
            :fill="shadowColor"
          />
          <path
            id="ブルーギザギザ線-4"
            data-name="ブルーギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="translate(25.094 18.766) rotate(-159)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンクギザギザ-5" data-name="ピンクギザギザ" transform="translate(971.236 72.079)">
          <path
            id="ピンクギザギザ-6"
            data-name="ピンクギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(-0.788, -0.616, 0.616, -0.788, 21.181, 21.435)"
            :fill="shadowColor"
          />
          <path
            id="ピンクギザギザ線-3"
            data-name="ピンクギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(-0.788, -0.616, 0.616, -0.788, 21.181, 25.615)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g
          id="イエローギザギザ-5"
          data-name="イエローギザギザ"
          transform="translate(538.236 112.079)"
        >
          <path
            id="イエローギザギザ-6"
            data-name="イエローギザギザ"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(-0.788, -0.616, 0.616, -0.788, 21.181, 21.435)"
            :fill="shadowColor"
          />
          <path
            id="イエローギザギザ線-3"
            data-name="イエローギザギザ線"
            d="M0,0,5.007,6.2,9.7,0l4.409,6.2L18.323,0l4.121,6.2S25.672,1.55,26.879,0"
            transform="matrix(-0.788, -0.616, 0.616, -0.788, 21.181, 25.615)"
            fill="none"
            :stroke="strokeColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンク丸-5" data-name="ピンク丸" transform="translate(797.942 99.109)">
          <ellipse
            id="ピンク丸-6"
            data-name="ピンク丸"
            cx="15.5"
            cy="15.5"
            rx="15.5"
            ry="15.5"
            transform="translate(6 1)"
            :fill="shadowColor"
          />
          <g
            id="ピンク丸線-3"
            data-name="ピンク丸線"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <ellipse cx="16.5" cy="16" rx="16.5" ry="16" stroke="none" />
            <ellipse cx="16.5" cy="16" rx="15.75" ry="15.25" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.green}`">
        <g id="グリーン丸" transform="translate(434.942 106.109)">
          <ellipse
            id="グリーン丸-2"
            data-name="グリーン丸"
            cx="15.5"
            cy="15.5"
            rx="15.5"
            ry="15.5"
            transform="translate(6 1)"
            :fill="shadowColor"
          />
          <g id="グリーン丸線" fill="none" :stroke="strokeColor" stroke-width="1.5">
            <ellipse cx="16.5" cy="16" rx="16.5" ry="16" stroke="none" />
            <ellipse cx="16.5" cy="16" rx="15.75" ry="15.25" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g id="イエロー三角-3" data-name="イエロー三角" transform="translate(888.013 14.512)">
          <path
            id="イエロー三角-4"
            data-name="イエロー三角"
            d="M19.647,0,39.294,21.737H0Z"
            transform="matrix(-0.819, 0.574, -0.574, -0.819, 44.656, 21.15)"
            :fill="shadowColor"
          />
          <g
            id="イエロー三角線-2"
            data-name="イエロー三角線"
            transform="matrix(-0.819, 0.574, -0.574, -0.819, 48.823, 17.806)"
            fill="none"
          >
            <path d="M19.647,0,39.294,21.737H0Z" stroke="none" />
            <path
              d="M 19.64712142944336 2.237003326416016 L 3.377677917480469 20.23723983764648 L 35.91656494140625 20.23723983764648 L 19.64712142944336 2.237003326416016 M 19.64712142944336 -1.9073486328125e-06 L 39.29424285888672 21.73723983764648 L 0 21.73723983764648 L 19.64712142944336 -1.9073486328125e-06 Z"
              stroke="none"
              :fill="strokeColor"
            />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g id="イエロー三角-5" data-name="イエロー三角" transform="translate(699.013 7.512)">
          <path
            id="イエロー三角-6"
            data-name="イエロー三角"
            d="M19.647,0,39.294,21.737H0Z"
            transform="matrix(-0.819, 0.574, -0.574, -0.819, 44.656, 21.15)"
            :fill="shadowColor"
          />
          <g
            id="イエロー三角線-3"
            data-name="イエロー三角線"
            transform="matrix(-0.819, 0.574, -0.574, -0.819, 48.823, 17.806)"
            fill="none"
          >
            <path d="M19.647,0,39.294,21.737H0Z" stroke="none" />
            <path
              d="M 19.64712142944336 2.237003326416016 L 3.377677917480469 20.23723983764648 L 35.91656494140625 20.23723983764648 L 19.64712142944336 2.237003326416016 M 19.64712142944336 -1.9073486328125e-06 L 39.29424285888672 21.73723983764648 L 0 21.73723983764648 L 19.64712142944336 -1.9073486328125e-06 Z"
              stroke="none"
              :fill="strokeColor"
            />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.green}`">
        <g id="グリーン四角-5" data-name="グリーン四角" transform="translate(920.204 98.028)">
          <rect
            id="グリーン四角-6"
            data-name="グリーン四角"
            width="25.081"
            height="25.081"
            transform="translate(8.491 0) rotate(8)"
            :fill="shadowColor"
          />
          <g
            id="グリーン四角線-3"
            data-name="グリーン四角線"
            transform="translate(3.491 4.18) rotate(8)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルー四角-3" data-name="ブルー四角" transform="translate(655.204 105.028)">
          <rect
            id="ブルー四角-4"
            data-name="ブルー四角"
            width="25.081"
            height="25.081"
            transform="translate(8.491 0) rotate(8)"
            :fill="shadowColor"
          />
          <g
            id="ブルー四角線-2"
            data-name="ブルー四角線"
            transform="translate(3.491 4.18) rotate(8)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンク丸-7" data-name="ピンク丸" transform="translate(957.391 34.109)">
          <ellipse
            id="ピンク丸-8"
            data-name="ピンク丸"
            cx="7.5"
            cy="7.5"
            rx="7.5"
            ry="7.5"
            transform="translate(0 2)"
            :fill="shadowColor"
          />
          <g
            id="ピンク丸線-4"
            data-name="ピンク丸線"
            transform="translate(2.991)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <ellipse cx="7.5" cy="7.5" rx="7.5" ry="7.5" stroke="none" />
            <ellipse cx="7.5" cy="7.5" rx="6.75" ry="6.75" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルー三角-3" data-name="ブルー三角" transform="translate(1013.895 89.155)">
          <path
            id="ブルー三角-4"
            data-name="ブルー三角"
            d="M19.647,0,39.294,21.737H0Z"
            transform="translate(31.238 50.221) rotate(-137)"
            :fill="shadowColor"
          />
          <g
            id="ブルー三角線-2"
            data-name="ブルー三角線"
            transform="translate(28.738 42.696) rotate(-137)"
            fill="none"
          >
            <path d="M19.647,0,39.294,21.737H0Z" stroke="none" />
            <path
              d="M 19.64712142944336 2.237003326416016 L 3.377677917480469 20.23723983764648 L 35.91656494140625 20.23723983764648 L 19.64712142944336 2.237003326416016 M 19.64712142944336 0 L 39.29424285888672 21.73723983764648 L 0 21.73723983764648 L 19.64712142944336 0 Z"
              stroke="none"
              :fill="strokeColor"
            />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.pink}`">
        <g id="ピンク四角-3" data-name="ピンク四角" transform="translate(1110.165 9.019)">
          <rect
            id="ピンク四角-4"
            data-name="ピンク四角"
            width="25.081"
            height="25.081"
            transform="translate(0 16.452) rotate(-25)"
            :fill="shadowColor"
          />
          <g
            id="ピンク四角線-2"
            data-name="ピンク四角線"
            transform="translate(2.508 10.6) rotate(-25)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.yellow}`">
        <g id="イエロー丸-3" data-name="イエロー丸" transform="translate(1132.942 118.109)">
          <ellipse
            id="イエロー丸-4"
            data-name="イエロー丸"
            cx="10"
            cy="10.5"
            rx="10"
            ry="10.5"
            transform="translate(6)"
            :fill="shadowColor"
          />
          <g
            id="イエロー丸線-2"
            data-name="イエロー丸線"
            transform="translate(0 1)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <ellipse cx="10" cy="10" rx="10" ry="10" stroke="none" />
            <ellipse cx="10" cy="10" rx="9.25" ry="9.25" fill="none" />
          </g>
        </g>
      </g>
      <g :style="`color: ${colors.blue}`">
        <g id="ブルー四角-5" data-name="ブルー四角" transform="translate(781 6.16)">
          <rect
            id="ブルー四角-6"
            data-name="ブルー四角"
            width="25.081"
            height="25.081"
            transform="translate(8.507 4.18) rotate(8)"
            :fill="shadowColor"
          />
          <g
            id="ブルー四角線-3"
            data-name="ブルー四角線"
            transform="translate(3.491 0) rotate(8)"
            fill="none"
            :stroke="strokeColor"
            stroke-width="1.5"
          >
            <rect width="25.081" height="25.081" stroke="none" />
            <rect x="0.75" y="0.75" width="23.581" height="23.581" fill="none" />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="sass">
// $
.pep-header-decoration-light
  > svg
    overflow: visible
    max-width: 200vw
</style>
