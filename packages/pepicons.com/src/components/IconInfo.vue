<template>
  <div class="icon-info">
    <HtmlButton class="_toggle-code-button" v-model="_.codeShown" v-bind="config" />
    <div class="_code-section">
      <div>
        <Tabs
          class="_tab-panels"
          v-model:selectedTab="_.openCodeTab"
          :tabs="['Vue', 'SVG']"
          :color="config.color"
        >
          <template v-if="_.openCodeTab === 'Vue'">
            <div style="max-height: 400px; overflow: scroll" class="_tab-panel">
              <CodeBlock lang="html" :content="codeVue" class="_code-block" />
            </div>
          </template>
          <template v-if="_.openCodeTab === 'SVG'">
            <div style="max-height: 400px; overflow: scroll" class="_tab-panel">
              <CodeBlock lang="html" :content="codeSvg" class="_code-block" />
            </div>
          </template>
        </Tabs>
      </div>
    </div>

    <div class="_top-door" :class="{ '_top-door-transform': _.codeShown }">
      <Pepicon
        :name="config.name"
        :type="config.type"
        :color="config.color"
        :stroke="config.stroke"
        size="80px"
      />
      <div class="text-h5 mt-xl">{{ config.name }}</div>
    </div>
    <div class="_bottom-door text-h6 px-xl" :class="{ '_bottom-door-transform': _.codeShown }">
      <div class="flex-center relative">
        <div>SVG</div>
        <div class="flex gutter-x-sm mt-xs">
          <IconButton
            :iconConfig="{
              ...configOptionButtons,
              name: 'cloud-down',
            }"
            :isActive="_.downloadSvgDone"
            @click="downloadSvg"
          />
          <IconButton
            :iconConfig="{
              ...configOptionButtons,
              name: 'clipboard',
            }"
            :isActive="_.copySvgDone"
            @click="copySvg"
          />
        </div>
      </div>
      <div class="flex-center">
        <div>PNG</div>
        <div class="flex gutter-x-sm mt-xs">
          <IconButton
            :iconConfig="{
              ...configOptionButtons,
              name: 'cloud-down',
            }"
            :isActive="_.downloadPngDone"
            @click="downloadPng"
          />
          <IconButton
            :iconConfig="{
              ...configOptionButtons,
              name: 'clipboard',
            }"
            :isActive="_.copyPngDone"
            @click="copyPng"
          />
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

<script lang="ts">
import copyToClipboard from 'copy-text-to-clipboard'
import { defineComponent, computed, reactive, PropType, ref } from 'vue'
import { pepiconSvgString } from 'pepicons'
import { Pepicon } from '@pepicons/vue'
import CodeBlock from './CodeBlock.vue'
import IconButton from './IconButton.vue'
import HtmlButton from './HtmlButton.vue'
import { downloadBase64AsFile, downloadFile } from '../helpers/download'
import { svgToBase64Png, base64ToBlob } from '../helpers/conversion'
import { defaultsIconConfig, IconConfig } from '../types'
import Tabs from './Tabs.vue'

declare class ClipboardItem {
  constructor(data: { [mimeType: string]: Blob })
}

function generateVueCode(iconName: string, config: IconConfig): string {
  const _stroke =
    config.stroke && config.stroke !== 'black' ? `\n    stroke="${config.stroke}"` : ''
  return `<template>
  <Pepicon
    name="${iconName}"
    type="${config.type}"
    color="${config.color}"${_stroke}
  />
</template>

<script lang="js">
import { Pepicon } from '@pepicons/vue'

export default {
  components: { Pepicon }
}
<\/script>`
}

export default defineComponent({
  name: 'IconInfo',
  components: { IconButton, HtmlButton, Pepicon, CodeBlock, Tabs },
  props: {
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    config: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
    /**
     * @type {{ name?: string, type: 'pop' | 'print', color: string, stroke: string }}
     */
    configOptionButtons: {
      type: Object as PropType<IconConfig>,
      default: () => ({ ...defaultsIconConfig() }),
    },
  },
  setup(props) {
    const selectedTab = ref<'Vue' | 'SVG'>('Vue')
    const _ = reactive({
      openCodeTab: 'Vue',
      codeShown: false,
      downloadSvgDone: false,
      copySvgDone: false,
      downloadPngDone: false,
      copyPngDone: false,
    })

    const codeSvg = pepiconSvgString(props.config as any)
    const codeVue = generateVueCode(props.config.name || '', props.config)

    function downloadSvg(): void {
      downloadFile(codeSvg, `${props.config.name}.svg`)
      _.downloadSvgDone = true
    }
    function copySvg(): void {
      const copied = copyToClipboard(codeSvg)
      _.copySvgDone = copied
    }
    async function downloadPng(): Promise<void> {
      const _codeSvg = pepiconSvgString({ ...props.config, size: '48px' } as any)
      const pngString = await svgToBase64Png(_codeSvg)
      downloadBase64AsFile(pngString, `${props.config.name}.png`)
      _.downloadPngDone = true
    }
    async function copyPng(): Promise<void> {
      const _codeSvg = pepiconSvgString({ ...props.config, size: '48px' } as any)
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

    return { _, codeSvg, codeVue, selectedTab, copySvg, copyPng, downloadSvg, downloadPng }
  },
})
</script>
