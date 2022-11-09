<script lang="ts" setup>
import { Pepicon } from '@pepicons/vue'
import copyToClipboard from 'copy-text-to-clipboard'
import { PepiconName, pepiconSvgString } from 'pepicons'
import { ref } from 'vue'
import { base64ToBlob, svgToBase64Png } from '../helpers/conversion'
import { downloadBase64AsFile, downloadFile } from '../helpers/download'
import CodeBlock from './CodeBlock.vue'
import HtmlButton from './HtmlButton.vue'
import IconButton from './IconButton.vue'
import Tabs from './Tabs.vue'

function generateVueCode(payload: {
  name: PepiconName
  type: 'pop' | 'print'
  color: string
  stroke: string
}): string {
  const _stroke =
    payload.stroke && payload.stroke !== 'black' ? `\n    stroke="${payload.stroke}"` : ''
  return `<template>
  <Pepicon
    name="${payload.name}"
    type="${payload.type}"
    color="${payload.color}"${_stroke}
  />
</template>

<script lang="js">
import { Pepicon } from '@pepicons/vue'

export default {
  components: { Pepicon }
}
<\/script>`
}

// const props = defineProps<{}>()

const selectedTab = ref<'Vue' | 'SVG'>('Vue')
const codeShown = ref(false)
const downloadSvgDone = ref(false)
const copySvgDone = ref(false)
const downloadPngDone = ref(false)
const copyPngDone = ref(false)

const codeSvg = pepiconSvgString({
  name: 'airplane',
  type: 'pop',
  color: 'mediumslateblue',
  stroke: 'black',
})
const codeVue = generateVueCode({
  name: 'airplane',
  type: 'pop',
  color: 'mediumslateblue',
  stroke: 'black',
})

function downloadSvg(): void {
  downloadFile(codeSvg, `airplane.svg`)
  downloadSvgDone.value = true
}

function copySvg(): void {
  const copied = copyToClipboard(codeSvg)
  copySvgDone.value = copied
}

async function downloadPng(): Promise<void> {
  const _codeSvg = pepiconSvgString({
    name: 'airplane',
    type: 'pop',
    color: 'mediumslateblue',
    stroke: 'black',
    size: '48px',
  } as any)
  const pngString = await svgToBase64Png(_codeSvg)
  downloadBase64AsFile(pngString, `airplane.png`)
  downloadPngDone.value = true
}

async function copyPng(): Promise<void> {
  const _codeSvg = pepiconSvgString({
    name: 'airplane',
    type: 'pop',
    color: 'mediumslateblue',
    stroke: 'black',
    size: '48px',
  } as any)
  const pngString = await svgToBase64Png(_codeSvg)
  const item = new window.ClipboardItem({
    'image/png': base64ToBlob(pngString),
  })
  // @ts-ignore
  if (window.navigator?.clipboard?.write) {
    // @ts-ignore
    window.navigator.clipboard.write([item]).then(() => (copyPngDone.value = true))
  }
}
</script>

<template>
  <div class="icon-info">
    <HtmlButton
      v-model="codeShown"
      class="_toggle-code-button"
      type="pop"
      color="mediumslateblue"
      stroke="black"
    />
    <div class="_code-section">
      <div>
        <Tabs
          v-model:selectedTab="selectedTab"
          class="_tab-panels"
          :tabs="['Vue', 'SVG']"
          :color="'mediumslateblue'"
        >
          <template v-if="selectedTab === 'Vue'">
            <div style="max-height: 400px; overflow: scroll" class="_tab-panel">
              <CodeBlock lang="html" :content="codeVue" class="_code-block" />
            </div>
          </template>
          <template v-if="selectedTab === 'SVG'">
            <div style="max-height: 400px; overflow: scroll" class="_tab-panel">
              <CodeBlock lang="html" :content="codeSvg" class="_code-block" />
            </div>
          </template>
        </Tabs>
      </div>
    </div>

    <div class="_top-door" :class="{ '_top-door-transform': codeShown }">
      <Pepicon
        :name="'airplane'"
        :type="'pop'"
        :color="'mediumslateblue'"
        :stroke="'black'"
        size="80px"
      />
      <div class="text-h5 mt-xl">{{ 'airplane' }}</div>
    </div>
    <div class="_bottom-door text-h6 px-xl" :class="{ '_bottom-door-transform': codeShown }">
      <div class="flex-center relative">
        <div>SVG</div>
        <div class="flex gutter-x-sm mt-xs">
          <!-- name: 'cloud-down', -->
          <IconButton :isActive="downloadSvgDone" @click="downloadSvg" />
          <!-- name: 'clipboard', -->
          <IconButton :isActive="copySvgDone" @click="copySvg" />
        </div>
      </div>
      <div class="flex-center">
        <div>PNG</div>
        <div class="flex gutter-x-sm mt-xs">
          <!-- name: 'cloud-down', -->
          <IconButton :isActive="downloadPngDone" @click="downloadPng" />
          <!-- name: 'clipboard', -->
          <IconButton :isActive="copyPngDone" @click="copyPng" />
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
  max-width: inherit
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
  +flex-center
._bottom-door
  display: flex
  justify-content: space-around
  align-items: center
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
