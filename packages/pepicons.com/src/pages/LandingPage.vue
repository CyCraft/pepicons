<script lang="ts" setup>
import { computed, watch, ref } from 'vue'
import {
  Pepicon,
  synonyms,
  synonymsJa,
  categories,
  pepiconCategoryDic,
  PepiconName,
} from 'pepicons'
import Stack from '../components/Stack.vue'
import IconGrid from '../components/IconGrid.vue'
import PepInput from '../components/PepInput.vue'
import Pickers from '../components/Pickers.vue'
import PepLink from '../components/PepLink.vue'
import ProfileCard from '../components/ProfileCard.vue'
import { setPrimaryColor } from '../helpers/colorHelpers'
import { cleanupForSearch } from '../helpers/search'
import { setUrlQuery, getQueryFromUrl } from '../helpers/urlHelpers'
import { defaultsIconConfig } from '../types'
import DialogWrapper from '../components/DialogWrapper.vue'
import IconInfo from '../components/IconInfo.vue'

document.body.classList.add('light-mode')

const emit = defineEmits(['set-is-dark-mode', 'set-config'])

const hash = getQueryFromUrl()

const searchInput = ref(hash || '')
const config = ref(defaultsIconConfig({ isDarkMode: false }))

const configComputed = computed(() => {
  const { type, color: _color, stroke: _stroke, isDarkMode } = config.value
  const useColorAsStroke = type === 'print' && isDarkMode
  const color = useColorAsStroke ? 'black' : _color
  const stroke = useColorAsStroke ? _color : _stroke
  return { type, color, stroke }
})

// watch config for side effects
watch(
  config,
  (conf) => {
    emit('set-config', conf)
    const { type, color, isDarkMode } = conf

    // color
    setPrimaryColor(color)

    // type
    document.body.className = document.body.className.replace(/(print|pop)-mode/g, `${type}-mode`)

    // dark mode
    emit('set-is-dark-mode', isDarkMode)
    const mode = isDarkMode ? 'dark-mode' : 'light-mode'
    document.body.className = document.body.className.replace(/(dark|light)-mode/g, mode)
  },
  { deep: true, immediate: true },
)

const categoryIconNamesDic = computed(() =>
  Object.entries(pepiconCategoryDic).reduce((dic, [iconName, iconCategory]) => {
    if (!(iconCategory in dic)) dic[iconCategory] = []
    const iconNonExistent = config.value.type === 'print' && iconName.endsWith('-filled')
    if (iconNonExistent) return dic
    const searchText = cleanupForSearch(searchInput.value)
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
    dic[iconCategory].push(iconName as any)
    return dic
  }, {} as { [category: string]: PepiconName[] }),
)

const iconInfoIsVisible = ref(false)
const iconInfoName = ref<PepiconName>('airplane')
function openIconModal(icon: PepiconName): void {
  iconInfoIsVisible.value = true
  iconInfoName.value = icon
}
const scrollPageTo = (navEl) => {
  console.log(`#${navEl}`)
  const element = document.querySelector(`#${navEl}`)

  element?.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
</script>

<template>
  <div v-bind="$attrs" style="padding: 24px" class="page-index">
    <div class="_page-content">
      <div class="flex mb-xxl">
        <Stack class="ml-auto" classes="justify-end items-center">
          <Stack class="ml-auto" classes="items-center">
            <PepLink
              href="https://github.com/CyCraft/pepicons"
              content="GitHub"
              icon="github"
              :config="config"
            />
            <PepLink
              content="About Us"
              icon="info-filled"
              :config="config"
              class="cursor-arrow-down"
              @click.stop.prevent="scrollPageTo('about-us')"
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
          :config="config"
        />!
      </div>
      <Pickers v-model="config" :configComputed="configComputed" class="mb-md" />
      <PepInput
        id="top"
        v-model="searchInput"
        class="mb-xxl"
        :color="config.color"
        :debounce="200"
        :isDarkMode="config.isDarkMode"
        :iconConfig="{ ...configComputed, name: 'loop' }"
        @blur="() => setUrlQuery(searchInput)"
        @keydown.meta="() => setUrlQuery(searchInput)"
      />
      <template v-for="category in categories">
        <div v-if="categoryIconNamesDic[category].length" :key="category" class="mb-xxl">
          <div class="text-section-title">{{ category }}</div>
          <IconGrid
            :iconNames="categoryIconNamesDic[category]"
            :config="configComputed"
            :searchInput="searchInput"
            @clickTile="openIconModal"
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
            :config="config"
          />
          a new icon on GitHub. 　🙃
        </div>
      </div>
      <div class="_section">
        <div id="about-us" class="text-section-title">About Us</div>
        <div class="mb-lg">
          Read the
          <PepLink
            href="https://medium.com/@lucaban/pepicons-retro-icon-set-now-available-for-designers-and-coders-40db866a7460"
            retroUnderline
            content="announcement blog post"
            :config="config"
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
          class="cursor-arrow-up px-md py-sm"
          content="Go to top"
          :config="config"
          @click.stop.prevent="scrollPageTo('top')"
        />
        <div class="mt-xxl">
          <PepLink
            href="https://github.com/sponsors/mesqueeb"
            retroUnderline
            content="Sponsor development"
            :config="config"
          />
        </div>
      </div>
    </div>
  </div>
  <DialogWrapper :isVisible="iconInfoIsVisible" @close="iconInfoIsVisible = false">
    <IconInfo :config="{ ...configComputed, name: iconInfoName }" :configOptionButtons="config" />
  </DialogWrapper>
</template>

<style lang="sass">
@import '../css/variables'
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
