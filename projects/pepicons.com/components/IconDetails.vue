<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import copyToClipboard from 'copy-text-to-clipboard'
import { PepiconName, pepiconSvgString } from 'pepicons'
import { computed, ref } from 'vue'
import { generateVueCode } from '../helpers/codeExampleHelpers'
import { base64ToBlob, svgToBase64Png } from '../helpers/conversion'
import { downloadBase64AsFile, downloadFile } from '../helpers/download'
import { Choices, RandomColorDic } from '../types'
import HtmlButton from './HtmlButton.vue'
import IconButton from './IconButton.vue'
import Tabs from './Tabs.vue'

const props = defineProps<{
  icon: PepiconName
  choices: Choices
  randomColorDic: RandomColorDic
}>()

const wrap = ref<undefined | 'circle' | 'circle-filled' | 'off' | 'circle-off'>(undefined)
const iconNameWrapped = computed(
  () => (wrap.value ? `${props.icon}-${wrap.value}` : props.icon) as PepiconName,
)
const selectedTab = ref<'Vue' | 'SVG'>('Vue')
const codeShown = ref(false)
const downloadSvgDone = ref(false)
const copySvgDone = ref(false)
const downloadPngDone = ref(false)
const copyPngDone = ref(false)

const colorGenerated = computed(() => {
  const { icon, choices, randomColorDic } = props
  return choices.colorOrigin === 'randomizer' ? randomColorDic[icon] || '' : choices.color
})

const codeSvg = computed(() => {
  const { type, shadow, opacity } = props.choices
  return pepiconSvgString({
    type,
    shadow,
    opacity,
    name: iconNameWrapped.value,
    color: colorGenerated.value,
  })
})

const codeSvgLg = computed(() => {
  const { type, shadow, opacity } = props.choices
  return pepiconSvgString({
    type,
    shadow,
    opacity,
    name: iconNameWrapped.value,
    color: colorGenerated.value,
    size: '48px',
  })
})

const codeVue = computed(() => {
  const { type, shadow, opacity } = props.choices
  return generateVueCode({
    type,
    shadow,
    opacity,
    name: iconNameWrapped.value,
    color: colorGenerated.value,
  })
})

function downloadSvg(): void {
  downloadFile(codeSvg.value, `${props.icon}.svg`)
  downloadSvgDone.value = true
}

function copySvg(): void {
  const copied = copyToClipboard(codeSvg.value)
  copySvgDone.value = copied
}

async function downloadPng(): Promise<void> {
  const pngString = await svgToBase64Png(codeSvgLg.value)
  downloadBase64AsFile(pngString, `${props.icon}.png`)
  downloadPngDone.value = true
}

async function copyPng(): Promise<void> {
  const pngString = await svgToBase64Png(codeSvgLg.value)
  const item = new window.ClipboardItem({
    'image/png': base64ToBlob(pngString),
  })

  if (window.navigator?.clipboard?.write) {
    window.navigator.clipboard.write([item]).then(() => (copyPngDone.value = true))
  }
}
</script>

<template>
  <div class="icon-info">
    <HtmlButton
      v-model="codeShown"
      class="_toggle-code-button"
      :type="choices.type"
      :color="colorGenerated"
      :shadow="choices.shadow"
      :opacity="choices.opacity"
    />

    <div class="_code-section">
      <div>
        <Tabs
          v-model:selectedTab="selectedTab"
          class="_tab-panels"
          :tabs="['Vue', 'SVG']"
          :activeColor="colorGenerated"
        >
          <template v-if="selectedTab === 'Vue'">
            <div style="max-height: 400px; overflow: scroll" class="_tab-panel">
              <CodeBlock :content="codeVue" class="_code-block" />
            </div>
          </template>
          <template v-if="selectedTab === 'SVG'">
            <div style="max-height: 400px; overflow: scroll" class="_tab-panel">
              <CodeBlock :content="codeSvg" class="_code-block" />
            </div>
          </template>
        </Tabs>
      </div>
    </div>

    <div class="_top-door" :class="{ '_top-door-transform': codeShown }">
      <Pepicon
        :name="iconNameWrapped"
        :type="choices.type"
        :color="colorGenerated"
        :shadow="choices.shadow"
        :opacity="choices.opacity"
        size="80px"
      />

      <div class="text-h5 mt-xl">{{ iconNameWrapped }}</div>
    </div>
    <div
      class="_bottom-door column justify-center gap-md text-h6 px-xl"
      :class="{ '_bottom-door-transform': codeShown }"
    >
      <div class="column flex-center relative">
        <div>WRAP</div>

        <div class="flex gutter-x-sm mt-xs">
          <IconButton
            :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
            :icon="icon"
            :type="choices.type"
            :color="colorGenerated"
            :shadow="choices.shadow"
            :opacity="choices.opacity"
            :activeColor="colorGenerated"
            :isActive="!wrap"
            @click="() => (wrap = undefined)"
          />
          <IconButton
            :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
            :icon="(`${icon}-circle` as PepiconName)"
            :type="choices.type"
            :color="colorGenerated"
            :shadow="choices.shadow"
            :opacity="choices.opacity"
            :activeColor="colorGenerated"
            :isActive="wrap === 'circle'"
            @click="() => (wrap = 'circle')"
          />
          <IconButton
            :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
            :icon="(`${icon}-circle-filled` as PepiconName)"
            :type="choices.type"
            :color="colorGenerated"
            :shadow="choices.shadow"
            :opacity="choices.opacity"
            :activeColor="colorGenerated"
            :isActive="wrap === 'circle-filled'"
            @click="() => (wrap = 'circle-filled')"
          />
          <IconButton
            :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
            :icon="(`${icon}-off` as PepiconName)"
            :type="choices.type"
            :color="colorGenerated"
            :shadow="choices.shadow"
            :opacity="choices.opacity"
            :activeColor="colorGenerated"
            :isActive="wrap === 'off'"
            @click="() => (wrap = 'off')"
          />
          <IconButton
            :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
            :icon="(`${icon}-circle-off` as PepiconName)"
            :type="choices.type"
            :color="colorGenerated"
            :shadow="choices.shadow"
            :opacity="choices.opacity"
            :activeColor="colorGenerated"
            :isActive="wrap === 'circle-off'"
            @click="() => (wrap = 'circle-off')"
          />
        </div>
      </div>

      <div class="flex justify-evenly">
        <div class="column flex-center relative">
          <div>SVG</div>

          <div class="flex gutter-x-sm mt-xs">
            <IconButton
              :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
              icon="cloud-down"
              :type="choices.type"
              :color="colorGenerated"
              :shadow="choices.shadow"
              :opacity="choices.opacity"
              :activeColor="colorGenerated"
              :isActive="downloadSvgDone"
              @click="() => downloadSvg()"
            />

            <IconButton
              :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
              icon="clipboard"
              :type="choices.type"
              :color="colorGenerated"
              :shadow="choices.shadow"
              :opacity="choices.opacity"
              :activeColor="colorGenerated"
              :isActive="copySvgDone"
              @click="() => copySvg()"
            />
          </div>
        </div>
        <div class="column flex-center">
          <div>PNG</div>

          <div class="flex gutter-x-sm mt-xs">
            <IconButton
              :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
              icon="cloud-down"
              :type="choices.type"
              :color="colorGenerated"
              :shadow="choices.shadow"
              :opacity="choices.opacity"
              :activeColor="colorGenerated"
              :isActive="downloadPngDone"
              @click="() => downloadPng()"
            />

            <IconButton
              :backgroundColor="choices.mode === 'light' ? 'white' : 'black'"
              icon="clipboard"
              :type="choices.type"
              :color="colorGenerated"
              :shadow="choices.shadow"
              :opacity="choices.opacity"
              :activeColor="colorGenerated"
              :isActive="copyPngDone"
              @click="() => copyPng()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/variables.sass'
.icon-info
  +C(background-color, white)
  min-width: 280px
  width: 400px
  max-width: 90vw
  position: relative
  overflow: hidden
  border-radius: 1rem
  +fix-for-overflow-hidden-with-border-radius()
.dark-mode
  .icon-info
    +C(background-color, nightfall)

._toggle-code-button
  position: absolute
  top: 0
  right: 0
  z-index: 2

._top-door, ._bottom-door
  z-index: 1
  position: relative
  background-color: inherit
  transition: all 200ms ease-out !important
._top-door
  height: 288px
  +media-xs(height, 320px)
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  flex-wrap: nowrap
._bottom-door
  height: 162px
  +media-xs(height, 180px)
  &::before
    content: ''
    background-color: transparentize($c-washed-cloth, 0.9)
    +absolute-overlay()

._top-door-transform
  transform: translateY(-100%)
._bottom-door-transform
  transform: translateY(100%)

._code-section
  +absolute-overlay()
  z-index: 0

._tab
  // height: 50px
  +pt($sm)
  > *
    +t-subtitle1()
._tab-panels
  height: calc(100% - 100px)
  > *
    height: 100%
  ._tab-panel
    padding: 0
    height: inherit
  ._code-block
    height: inherit
    > *, > * > *
      height: inherit
    code
      white-space: pre-wrap
</style>
