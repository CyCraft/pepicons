<template>
  <q-page padding class="page-index">
    <div class="_page-content">
      <div class="flex mb-xxl">
        <Stack class="ml-auto" classes="justify-end items-center">
          <Stack class="ml-auto" classes="items-center">
            <PepLink href="https://github.com/CyCraft/pepicons" content="GitHub" icon="github" />
            <PepLink
              @click.native.stop.prevent="() => scrollTo('#about-us')"
              content="About Us"
              icon="info-filled"
              class="cursor-arrow-down"
            />
          </Stack>
          <a href="https://pepicons.com/PepiconSvgs.zip" class="download-button">Download</a>
        </Stack>
      </div>
      <div class="mb-md text-center">
        Pepicons is an icon-set of over one hundred retro icons inspired by the 80's.
        <br />Every icon available in 2 variants: <strong>Pop!</strong> and <strong>Print ❏</strong>
      </div>
      <div class="mb-xxl text-center">
        If this project has helped you, please consider
        <PepLink
          href="https://github.com/sponsors/mesqueeb"
          content="sponsoring us on GitHub"
          retroUnderline
        />!
      </div>
      <Pickers v-model="_.config" :configComputed="configComputed" class="mb-md" />
      <PepInput
        class="mb-xxl"
        id="top"
        :color="_.config.color"
        v-model="_.searchInput"
        :debounce="200"
        :isDarkMode="_.config.isDarkMode"
        :iconConfig="{ ...configComputed, name: 'loop' }"
      />
      <template v-for="category in categories">
        <div class="mb-xxl" v-if="categoryIconNamesDic[category].length" :key="category">
          <div class="text-section-title">{{ category }}</div>
          <IconGrid
            :iconNames="categoryIconNamesDic[category]"
            :config="configComputed"
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
          Read the
          <PepLink
            href="https://medium.com/@lucaban/pepicons-retro-icon-set-now-available-for-designers-and-coders-40db866a7460"
            retroUnderline
            content="announcement blog post"
          />
          to read about our motivation for creating Pepicons!<br /><br />Pepicons was made by these
          peeps:
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
        <div class="mt-xxl">
          <PepLink
            href="https://github.com/sponsors/mesqueeb"
            retroUnderline
            content="Sponsor development"
          />
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
  +reset-a()
  +reset-button()
  +t-subtitle1()
  +py($md)
  +px($xl)
  border-radius: $md
  text-transform: uppercase
  font-weight: $bold
  +C(color, white)
  +C(background, nightfall)
  +C(border, ivory, thin solid)
  &:active
    transform: scale(0.95)
.dark-mode .download-button
  +C(border, white, thin solid)
</style>

<script lang="ts">
import { defineComponent, computed, watch, reactive, ref } from '@vue/composition-api'
import {
  pop,
  print,
  Pepicon,
  PepiconPrint,
  synonyms,
  synonymsJa,
  categories,
  pepiconCategoryDic,
} from 'pepicons'
import sort from 'fast-sort'
import { Dialog } from 'quasar'
import Stack from '../components/atoms/Stack.vue'
import PepInput from '../components/atoms/PepInput.vue'
import IconGrid from '../components/molecules/IconGrid.vue'
import Pickers from '../components/molecules/Pickers.vue'
import PepLink from '../components/atoms/PepLink.vue'
import ProfileCard from '../components/atoms/ProfileCard.vue'
import { cssVar, setPrimaryColor } from '../helpers/colorHelpers'
import { cleanupForSearch } from '../helpers/search'
import { scrollTo } from '../helpers/scroll'
import { defaultsIconConfig, IconConfig } from '../types'

export default defineComponent({
  name: 'PageIndex',
  components: { IconGrid, Pickers, PepInput, PepLink, ProfileCard, Stack },
  created() {
    document.body.classList.add('light-mode')
    document.body.classList.add(`${defaultsIconConfig().type}-mode`)
  },
  setup(props, { emit }) {
    const _ = reactive({
      searchInput: '',
      config: defaultsIconConfig({ isDarkMode: false }),
    })

    const configComputed = computed(() => {
      const { type, color: _color, stroke: _stroke, isDarkMode } = _.config
      const useColorAsStroke = type === 'print' && isDarkMode
      const color = useColorAsStroke ? 'black' : _color
      const stroke = useColorAsStroke ? _color : _stroke
      return { type, color, stroke }
    })

    watch(
      () => _.config.type,
      (newVal) => {
        document.body.className = document.body.className.replace(
          /(print|pop)-mode/g,
          `${newVal}-mode`,
        )
      },
    )
    watch(
      () => _.config.color,
      (newVal) => {
        setPrimaryColor(newVal)
      },
    )
    watch(
      () => _.config.isDarkMode,
      (isDarkMode) => {
        if (isDarkMode === false) {
          document.body.className = document.body.className.replace(/dark-mode/g, 'light-mode')
          emit('set-is-dark-mode', false)
        }
        if (isDarkMode === true) {
          document.body.className = document.body.className.replace(/light-mode/g, 'dark-mode')
          emit('set-is-dark-mode', true)
        }
      },
    )

    const categoryIconNamesDic = computed(() =>
      Object.entries(pepiconCategoryDic).reduce((dic, [iconName, iconCategory]) => {
        if (!(iconCategory in dic)) dic[iconCategory] = []
        const iconNonExistent = _.config.type === 'print' && iconName.endsWith('-filled')
        if (iconNonExistent) return dic
        const searchText = cleanupForSearch(_.searchInput)
        if (searchText) {
          const _synonyms: string[] = [
            ...synonyms[iconName as Pepicon],
            ...synonymsJa[iconName as Pepicon],
            iconCategory,
          ]
          const searchHit =
            cleanupForSearch(iconName).includes(searchText) ||
            _synonyms?.some((syn) => cleanupForSearch(syn).includes(searchText))
          if (!searchHit) return dic
        }
        dic[iconCategory].push(iconName)
        return dic
      }, {} as { [category: string]: string[] }),
    )

    function openTileDialog(iconName: string): void {
      Dialog.create({
        component: 'DialogWrapper',
        dialogProps: { style: `border-radius: 1rem` },
        slotComponent: 'IconInfo',
        slotProps: {
          config: { ...configComputed.value, name: iconName },
          configOptionButtons: _.config,
        },
      })
    }

    return {
      _,
      configComputed,
      categories,
      categoryIconNamesDic,
      openTileDialog,
      scrollTo,
    }
  },
})
</script>
