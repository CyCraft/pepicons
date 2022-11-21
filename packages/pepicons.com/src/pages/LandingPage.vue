<script lang="ts" setup>
import {
  categories,
  Pepicon,
  pepiconCategoryDic,
  PepiconName,
  synonyms,
  synonymsJa,
} from 'pepicons'
import { computed, ref, watch } from 'vue'
import DialogWrapper from '../components/DialogWrapper.vue'
import IconGrid from '../components/IconGrid.vue'
import IconInfo from '../components/IconInfo.vue'
import PepInput from '../components/PepInput.vue'
import PepLink from '../components/PepLink.vue'
import Pickers from '../components/Pickers.vue'
import ProfileCard from '../components/ProfileCard.vue'
import Stack from '../components/Stack.vue'
import { getRandomColor } from '../helpers/colorHelpers'
import { cleanupForSearch } from '../helpers/search'
import { getQueryFromUrl, setUrlQuery } from '../helpers/urlHelpers'
import { Choices, GeneratedConfig } from '../types'

const props = defineProps<{
  choices: Choices
  generatedConfig: GeneratedConfig
}>()

const emit = defineEmits<{
  (e: 'update:choices', payload: Choices): void
}>()

const hash = getQueryFromUrl()

const searchInput = ref(hash || '')

const randomColorInner = ref<string>('')
watch(
  () => props.choices.color,
  (newVal) => {
    if (props.choices.randomColor) {
      randomColorInner.value = getRandomColor()
    }
  },
)

const categoryIconNamesDic = computed(() =>
  Object.entries(pepiconCategoryDic).reduce((dic, [iconName, iconCategory]) => {
    if (!(iconCategory in dic)) dic[iconCategory] = []
    const iconNonExistent = props.choices.type === 'print' && iconName.endsWith('-filled')
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
  console.log(`icon → `, icon)
  // iconInfoIsVisible.value = true
  // iconInfoName.value = icon
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
            <PepLink href="https://github.com/CyCraft/pepicons" content="GitHub" icon="github" />
            <PepLink
              href="#"
              content="About Us"
              icon="info-filled"
              class="cursor-arrow-down"
              @click.stop.prevent="scrollPageTo('about-us')"
            />
          </Stack>
          <a href="https://pepicons.com/PepiconSvgs.zip" class="download-button">Download</a>
        </Stack>
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
          retroUnderline
          :lineColor="choices.color"
        />!
      </div>
      <Pickers
        class="mb-md"
        :generatedConfig="generatedConfig"
        :choices="choices"
        @update:choices="(payload) => emit('update:choices', payload)"
      />
      <PepInput
        id="top"
        v-model="searchInput"
        :type="generatedConfig.type"
        :color="generatedConfig.color"
        :stroke="generatedConfig.stroke"
        class="mb-xxl"
        :debounce="200"
        @blur="() => setUrlQuery(searchInput)"
        @keydown.meta="() => setUrlQuery(searchInput)"
      />
      <template v-for="category in categories">
        <div v-if="categoryIconNamesDic[category].length" :key="category" class="mb-xxl">
          <div class="text-section-title">{{ category }}</div>
          <IconGrid
            :iconNames="categoryIconNamesDic[category]"
            :searchInput="searchInput"
            :generatedConfig="generatedConfig"
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
          href="#"
          class="cursor-arrow-up px-md py-sm"
          content="Go to top"
          @click.stop.prevent="scrollPageTo('top')"
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
  </div>
  <DialogWrapper :isVisible="iconInfoIsVisible" @close="iconInfoIsVisible = false">
    <IconInfo />
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
