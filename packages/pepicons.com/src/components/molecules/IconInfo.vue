<template>
  <div class="icon-info">
    <HtmlButton class="_toggle-code-button" v-model="_.codeShown" v-bind="config" />
    <div class="_code-section">
      <div class="flex">
        <q-tabs
          v-model="_.openCodeTab"
          dense
          shrink
          narrowIndicator
          noCaps
          align="left"
          indicatorColor="primary"
          content-class="text-h6"
        >
          <q-tab contentClass="_tab" :ripple="false" name="vue" label="Vue" />
          <q-tab contentClass="_tab" :ripple="false" name="svg" label="SVG" />
        </q-tabs>
      </div>
      <q-tab-panels v-model="_.openCodeTab" animated class="_tab-panels">
        <q-tab-panel class="_tab-panel" name="vue"
          ><CodeBlock lang="html" :content="codeVue" class="_code-block"
        /></q-tab-panel>
        <q-tab-panel class="_tab-panel" name="svg"
          ><CodeBlock lang="html" :content="codeSvg" class="_code-block"
        /></q-tab-panel>
      </q-tab-panels>
    </div>

    <div class="_top-door" :class="{ '_top-door-transform': _.codeShown }">
      <Pepicon v-bind="config" :name="icon" size="80px" />
      <div class="text-h5 mt-xl">{{ icon }}</div>
    </div>
    <div class="_bottom-door text-h6 px-xl" :class="{ '_bottom-door-transform': _.codeShown }">
      <div class="flex-center relative">
        <div>SVG</div>
        <div class="flex q-gutter-sm mt-xs">
          <IconButton
            iconName="cloud-down"
            :iconType="config.type"
            :iconColor="config.color"
            :isActive="_.downloadSvgDone"
            @click="downloadSvg"
          />
          <IconButton
            iconName="clipboard"
            :iconType="config.type"
            :iconColor="config.color"
            :isActive="_.copySvgDone"
            @click="copySvg"
          />
        </div>
      </div>
      <div class="flex-center">
        <div>PNG</div>
        <div class="flex q-gutter-sm mt-xs">
          <IconButton
            iconName="cloud-down"
            :iconType="config.type"
            :iconColor="config.color"
            :isActive="_.downloadPngDone"
            @click="downloadPng"
          />
          <IconButton
            iconName="clipboard"
            :iconType="config.type"
            :iconColor="config.color"
            :isActive="_.copyPngDone"
            @click="copyPng"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
// $
.icon-info
  background-color: white
  min-width: 400px
  position: relative
  overflow: hidden
.dark-mode
  .icon-info
    background-color: $c-nightfall

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
  height: 320px
  +flex-center
._bottom-door
  display: flex
  justify-content: space-around
  align-items: center
  height: 180px
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
  height: 50px
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

<script lang="ts">
import { defineComponent, computed, reactive, PropType } from '@vue/composition-api'
import { pepiconSvgString } from 'pepicons'
import { Pepicon } from 'vue-pepicons'
import { CodeBlock } from 'planetar'
import copyToClipboard from 'copy-text-to-clipboard'
import IconButton from '../atoms/IconButton.vue'
import HtmlButton from '../atoms/HtmlButton.vue'
import { downloadBase64AsFile, downloadFile } from '../../helpers/download'
import { svgToBase64Png, base64ToBlob } from '../../helpers/conversion'

declare class ClipboardItem {
  constructor(data: { [mimeType: string]: Blob })
}

function generateVueCode(
  iconName: string,
  config: { type: 'pop' | 'print'; color: string; background: string; stroke: string },
): string {
  const _stroke = config.stroke === 'white' && config.type === 'print' ? '\n    stroke="white"' : ''
  return `<template>
  <Pepicon
    name="${iconName}"
    type="${config.type}"
    color="${config.color}"${_stroke}
  />
</template>

<script lang="js">
import { Pepicon } from 'vue-pepicons'

export default {
  components: { Pepicon }
}
<\/script>`
}

export default defineComponent({
  name: 'IconInfo',
  components: { IconButton, HtmlButton, Pepicon, CodeBlock },
  props: {
    icon: { type: String, required: true },
    /**
     * @type {{ type: 'pop' | 'print', color: string, background: string, stroke: string }}
     */
    config: {
      type: Object as PropType<{
        type: 'pop' | 'print'
        color: string
        background: string
        stroke: string
      }>,
      default: () => ({
        type: 'pop' as 'pop' | 'print',
        color: 'black',
        background: 'white',
        stroke: 'black',
      }),
    },
  },
  setup(props) {
    const _ = reactive({
      openCodeTab: 'vue',
      codeShown: false,
      downloadSvgDone: false,
      copySvgDone: false,
      downloadPngDone: false,
      copyPngDone: false,
    })

    const codeSvg = pepiconSvgString({ name: props.icon, ...props.config } as any)
    const codeVue = generateVueCode(props.icon, props.config)

    function downloadSvg(): void {
      downloadFile(codeSvg, `${props.icon}.svg`)
      _.downloadSvgDone = true
    }
    function copySvg(): void {
      const copied = copyToClipboard(codeSvg)
      _.copySvgDone = copied
    }
    async function downloadPng(): Promise<void> {
      const _codeSvg = pepiconSvgString({ name: props.icon, ...props.config, size: '48px' } as any)
      const pngString = await svgToBase64Png(_codeSvg)
      downloadBase64AsFile(pngString, `${props.icon}.png`)
      _.downloadPngDone = true
    }
    async function copyPng(): Promise<void> {
      const _codeSvg = pepiconSvgString({ name: props.icon, ...props.config, size: '48px' } as any)
      const pngString = await svgToBase64Png(_codeSvg)
      const item = new ClipboardItem({
        'image/png': base64ToBlob(pngString),
      })
      // @ts-ignore
      if (window.navigator?.clipboard?.write) {
        // @ts-ignore
        window.navigator.clipboard.write([item]).then(() => (_.copyPngDone = true))
      }
    }

    return { _, codeSvg, codeVue, copySvg, copyPng, downloadSvg, downloadPng }
  },
})
</script>
