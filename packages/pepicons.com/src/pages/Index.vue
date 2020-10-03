<template>
  <q-page padding class="page-index">
    <div class="_page-content">
      <div class="flex mb-xxl">
        <Stack class="ml-auto">
          <PepLink href="https://github.com/CyCraft/pepicons" content="GitHub" icon="github" />
          <PepLink href="#about-us" content="About Us" icon="info-filled" />
          <button class="download-button">Download</button>
        </Stack>
      </div>
      <div class="mb-md text-center">
        Pepicons is an icon-set of over one hundred retro icons inspired by the 80's.
      </div>
      <div class="mb-xxl text-center">
        If this project has helped you, please consider
        <PepLink
          href="https://github.com/sponsors/mesqueeb"
          content="sponsoring us on GitHub"
          retroUnderline
        />!
      </div>
      <Pickers v-model="_.config" class="mb-md" />
      <PepInput
        class="mb-xxl"
        :color="_.config.color"
        v-model="_.searchInput"
        :debounce="200"
        :isDarkMode="darkMode"
      />
      <template v-for="category in categories">
        <div class="mb-xxl" v-if="categoryIconNamesDic[category].length" :key="category">
          <div class="text-section-title">{{ category }}</div>
          <IconGrid
            :iconNames="categoryIconNamesDic[category]"
            :type="_.config.type"
            :color="_.config.color"
            :stroke="_.config.stroke"
            :searchInput="_.searchInput"
          />
        </div>
      </template>
      <div class="_section">
        <div class="text-section-title">Request Icons</div>
        <div>
          Feel free to
          <PepLink
            href="https://github.com/CyCraft/pepicons/issues/new?labels=icon+request&template=icon-request.md"
            retroUnderline
            content="request"
          />
          a new icon on GitHub. 　🙃
        </div>
      </div>
      <div class="_section">
        <div class="text-section-title" id="about-us">About Us</div>
        <div>
          Read the announcement blog to read about our motivation for creating Pepicons! Pepicons
          was made by these peeps:
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass">
// $
.page-index
  transition: background-color 500ms
  ._page-content
    +mx(auto)
    max-width: 980px
  ._section
    +mt(160px)

.download-button
  +reset-button()
  +t-subtitle1()
  +py($md)
  +px($xl)
  border-radius: $md
  text-transform: uppercase
  font-weight: $bold
  color: white
  background: $c-nightfall
  border: thin solid $c-ivory
  &:active
    transform: scale(0.95)
.dark-mode .download-button
  border: thin solid white
</style>

<script lang="ts">
import { defineComponent, computed, watch, reactive, ref } from '@vue/composition-api'
import { pop, print, Pepicon, synonyms, categories, pepiconCategoryDic } from 'pepicons'
import sort from 'fast-sort'
import Stack from '../components/atoms/Stack.vue'
import PepInput from '../components/atoms/PepInput.vue'
import IconGrid from '../components/molecules/IconGrid.vue'
import Pickers from '../components/molecules/Pickers.vue'
import PepLink from '../components/atoms/PepLink.vue'
import { cssVar, setPrimaryColor } from '../helpers/colorHelpers'

export default defineComponent({
  name: 'PageIndex',
  components: { IconGrid, Pickers, PepInput, PepLink, Stack },
  created() {
    document.body.classList.add('light-mode')
  },
  setup(props) {
    const _ = reactive({
      searchInput: '',
      config: {
        type: 'print',
        color: cssVar('primary'),
        background: 'white',
        stroke: 'black',
      },
    })

    watch(
      () => _.config.color,
      (newVal) => {
        setPrimaryColor(newVal)
      },
    )
    watch(
      () => _.config.background,
      (newVal) => {
        if (newVal === 'white') {
          _.config.stroke = 'black'
          document.body.className = document.body.className.replace(/dark-mode/g, 'light-mode')
        }
        if (newVal === cssVar('nightfall')) {
          _.config.stroke = 'white'
          document.body.className = document.body.className.replace(/light-mode/g, 'dark-mode')
        }
      },
    )

    const darkMode = computed(() => {
      return _.config.background === cssVar('nightfall')
    })

    const categoryIconNamesDic = computed(() =>
      Object.entries(pepiconCategoryDic).reduce((dic, [iconName, iconCategory]) => {
        if (!(iconCategory in dic)) dic[iconCategory] = []
        const iconNonExistent = _.config.type === 'print' && iconName.endsWith('-filled')
        if (iconNonExistent) return dic
        const searchInput = _.searchInput.trim()
        if (searchInput) {
          const searchText = searchInput.toLowerCase()
          const _synonyms: string[] = synonyms[iconName as Pepicon]
          const searchHit =
            iconName.includes(searchText) || _synonyms?.some((syn) => syn.includes(searchText))
          if (!searchHit) return dic
        }
        dic[iconCategory].push(iconName)
        return dic
      }, {} as { [category: string]: string[] }),
    )

    return { _, darkMode, categories, categoryIconNamesDic }
  },
})
</script>
