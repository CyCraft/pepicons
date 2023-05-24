<script lang="ts" setup>
import { mapObject } from 'map-anything'
import {
  categories,
  Pepicon,
  pepiconCategoryDic,
  PepiconName,
  synonyms,
  synonymsJa,
} from 'pepicons'
import { computed, ref } from 'vue'
import DialogWrapper from '../components/DialogWrapper.vue'
import IconDetails from '../components/IconDetails.vue'
import PepInput from '../components/PepInput.vue'
import PepLink from '../components/PepLink.vue'
import Pickers from '../components/Pickers.vue'
import ProfileCard from '../components/ProfileCard.vue'
import { cleanupForSearch } from '../helpers/search'
import { getQueryFromUrl, setUrlQuery } from '../helpers/urlHelpers'
import { Choices, RandomColorDic } from '../types'

const props = defineProps<{
  choices: Choices
  randomColorDic: RandomColorDic
}>()

const emit = defineEmits<{
  (e: 'update:choices', payload: Choices): void
}>()

const hash = getQueryFromUrl()

const searchInput = ref(hash || '')

const categoryIconNamesDic = computed<{
  [category: string]: Pepicon[]
}>(() =>
  Object.entries(pepiconCategoryDic).reduce((dic, [iconName, iconCategory]) => {
    if (!(iconCategory in dic)) dic[iconCategory] = []
    if (
      iconName.endsWith('-circle-off') ||
      iconName.endsWith('-circle') ||
      iconName.endsWith('-circle-filled') ||
      iconName.endsWith('-off')
    ) {
      return dic
    }
    dic[iconCategory].push(iconName as any)
    return dic
  }, {} as { [category: string]: PepiconName[] }),
)

const categoryIconNamesFiltered = computed<{
  [category: string]: Pepicon[]
}>(() => {
  const searchText = cleanupForSearch(searchInput.value)
  if (!searchText) return categoryIconNamesDic.value

  return mapObject(categoryIconNamesDic.value, (icons, category) => {
    if (cleanupForSearch(category as string).includes(searchText)) return icons
    return icons.filter((iconName) => {
      const iconSynonyms = [...synonyms[iconName], ...synonymsJa[iconName]]
      const searchHit =
        cleanupForSearch(iconName).includes(searchText) ||
        iconSynonyms?.some((syn) => cleanupForSearch(syn).includes(searchText))
      return searchHit
    })
  })
})

const iconInfoIsVisible = ref(false)
const iconInfoName = ref<PepiconName>('airplane')
function openIconModal(icon: PepiconName): void {
  iconInfoName.value = icon
  iconInfoIsVisible.value = true
}
const scrollPageTo = (navEl: string) => {
  console.log(`#${navEl}`)
  const element = document.querySelector(`#${navEl}`)

  element?.scrollIntoView({ block: 'center', behavior: 'smooth' })
}
</script>

<template>
  <div v-bind="$attrs" class="page-index">
    <div class="_page-content">
      <div class="flex mb-xxl">
        <div class="ml-auto flex wrap justify-end items-center gap-md">
          <div class="ml-auto flex wrap items-center gap-md">
            <PepLink href="https://github.com/CyCraft/pepicons" content="GitHub" icon="github" />
            <PepLink
              href="#"
              content="About Us"
              icon="info-circle"
              class="cursor-arrow-down"
              @click.stop.prevent="scrollPageTo('about-us')"
            />
          </div>
          <a href="https://pepicons.com/PepiconSvgs.zip" class="download-button">Download</a>
        </div>
      </div>
      <div class="mb-md text-center">
        Pepicons is an icon-set of around five hundred (and counting) retro icons inspired by the
        80's.
        <br />Every icon available in 2 variants: <strong>Pop!</strong> and <strong>Print ❏</strong>
      </div>
      <div class="mb-xxl text-center">
        If this project has helped you, please consider
        <PepLink
          href="https://github.com/sponsors/mesqueeb"
          content="sponsoring us on GitHub"
          class="retro-underline"
        />!
      </div>
      <Pickers
        class="mb-md"
        :choices="choices"
        @update:choices="(payload) => emit('update:choices', payload)"
      />
      <PepInput
        id="top"
        v-model="searchInput"
        :choices="choices"
        class="mb-xxl"
        :debounce="200"
        @blur="() => setUrlQuery(searchInput)"
        @keydown.meta="() => setUrlQuery(searchInput)"
      />
      <template v-for="category in categories">
        <div v-if="categoryIconNamesFiltered[category].length" :key="category" class="mb-xxl">
          <div class="text-section-title">{{ category }}</div>
          <ClientOnly>
            <IconGrid
              :iconNames="categoryIconNamesFiltered[category]"
              :choices="choices"
              :randomColorDic="randomColorDic"
              :searchInput="searchInput"
              @clickTile="openIconModal"
            />
          </ClientOnly>
        </div>
      </template>
      <div class="_section">
        <div class="text-section-title">Request Icons</div>
        <div>
          Feel free to
          <PepLink
            href="https://github.com/CyCraft/pepicons/issues/new?labels=icon+request&template=icon-request.md"
            content="request"
            class="retro-underline"
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
            content="announcement blog post"
            class="retro-underline"
          />
          to read about our motivation for creating Pepicons!<br /><br />Pepicons was made by these
          peeps:
        </div>
        <div class="flex wrap justify-center gap-lg">
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
        </div>
      </div>
      <div class="mt-xxxl column flex-center">
        <PepLink
          href="#"
          class="cursor-arrow-up px-md py-sm"
          content="Go to top"
          icon="arrow-up"
          @click.stop.prevent="scrollPageTo('top')"
        />
        <div class="mt-xxl">
          <PepLink
            href="https://github.com/sponsors/mesqueeb"
            content="Sponsor development"
            class="retro-underline"
          />
        </div>
      </div>
    </div>
  </div>
  <ClientOnly>
    <DialogWrapper :isVisible="iconInfoIsVisible" @close="() => (iconInfoIsVisible = false)">
      <IconDetails :icon="iconInfoName" :choices="choices" :randomColorDic="randomColorDic" />
    </DialogWrapper>
  </ClientOnly>
</template>

<style lang="sass">
@import '../css/variables'
.page-index
  transition: background-color 500ms
  padding: 12px
  +media-xs(padding, $md)
  +media-sm(padding, $lg)
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
