<template>
  <q-page padding class="page-index">
    <div class="_page-content">
      <div class="flex mb-xxl">
        <Stack class="ml-auto">
          <PepLink href="https://github.com/CyCraft/pepicons" content="GitHub" icon="github" />
          <PepLink
            @click.native.stop.prevent="() => scrollTo('#about-us')"
            content="About Us"
            icon="info-filled"
            class="cursor-arrow-down"
          />
          <a
            href="https://github.com/CyCraft/pepicons/tree/production/packages/pepicons/svg"
            class="download-button"
            >Download</a
          >
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
        id="top"
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
            @clickTile="openTileDialog"
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
        <div class="mb-lg">
          Read the announcement blog to read about our motivation for creating Pepicons! Pepicons
          was made by these peeps:
        </div>
        <Stack classes="justify-center" gap="lg">
          <ProfileCard
            name="Luca Ban"
            :description="`Likes… jokes, minecraft\nWorks as… coder\nPassionate about… design`"
            profileUrl="luca.jpg"
            color="#55BBC5"
            profileImgStyle="margin-left: 32px"
            :links="['https://github.com/mesqueeb', 'https://twitter.com/mesqueeb']"
          />
          <ProfileCard
            name="Asuka"
            :description="`Likes… cats, vintage toys\nWorks as… designer\nPassionate about… cult films`"
            profileUrl="asuka.jpg"
            color="#F092AD"
            :links="['https://twitter.com/asukit']"
          />
        </Stack>
      </div>
      <div class="mt-xxxl flex-center">
        <PepLink
          content="Go to top"
          class="cursor-arrow-up px-md py-sm"
          @click.native.stop.prevent="() => scrollTo('#top')"
        />
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
  +reset-a()
  +reset-button()
  +t-subtitle1()
  +py($md)
  +px($xl)
  border-radius: $md
  text-transform: uppercase
  font-weight: $bold
  color: white
  +C(background, nightfall)
  +C(border, ivory, thin solid)
  &:active
    transform: scale(0.95)
.dark-mode .download-button
  border: thin solid white
</style>

<script lang="ts">
import { defineComponent, computed, watch, reactive, ref } from '@vue/composition-api'
import {
  pop,
  print,
  Pepicon,
  PepiconPrint,
  synonyms,
  categories,
  pepiconCategoryDic,
} from 'pepicons'
import sort from 'fast-sort'
import Stack from '../components/atoms/Stack.vue'
import PepInput from '../components/atoms/PepInput.vue'
import IconGrid from '../components/molecules/IconGrid.vue'
import Pickers from '../components/molecules/Pickers.vue'
import PepLink from '../components/atoms/PepLink.vue'
import ProfileCard from '../components/atoms/ProfileCard.vue'
import { cssVar, setPrimaryColor } from '../helpers/colorHelpers'
import { cleanupForSearch } from '../helpers/search'
import { scrollTo } from '../helpers/scroll'
import { Dialog } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  components: { IconGrid, Pickers, PepInput, PepLink, ProfileCard, Stack },
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
        const searchText = cleanupForSearch(_.searchInput)
        if (searchText) {
          const _synonyms: string[] = synonyms[iconName as Pepicon]
          const searchHit =
            cleanupForSearch(iconName).includes(searchText) ||
            _synonyms?.some((syn) => cleanupForSearch(syn).includes(searchText))
          if (!searchHit) return dic
        }
        dic[iconCategory].push(iconName)
        return dic
      }, {} as { [category: string]: string[] }),
    )

    function openTileDialog(icon: string): void {
      Dialog.create({
        component: 'DialogWrapper',
        dialogProps: { style: `border-radius: 1rem` },
        slotComponent: 'IconInfo',
        slotProps: { icon, config: _.config },
      })
    }

    return {
      _,
      darkMode,
      categories,
      categoryIconNamesDic,
      openTileDialog,
      scrollTo,
    }
  },
})
</script>
