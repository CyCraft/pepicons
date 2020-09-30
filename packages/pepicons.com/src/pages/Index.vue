<template>
  <q-page padding :class="`page-index ${darkMode ? 'dark-mode' : ''}`">
    <div class="_page-content">
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
            :filter="_.searchInput"
          />
        </div>
      </template>
      <div class="_section">
        <div class="text-section-title">Request Icons</div>
        <div>
          Feel free to
          <a
            href="https://github.com/CyCraft/pepicons/issues/new?labels=icon+request&template=icon-request.md"
            >request</a
          >
          a new icon on Github. 　🙃
        </div>
      </div>
      <div class="_section">
        <div class="text-section-title">About Us</div>
        <div>
          Pepicons was made by these peeps. Read the announcement blog to read about our motivation
          for creating Pepicons!
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
</style>

<script lang="ts">
import { defineComponent, computed, watch, reactive, ref } from '@vue/composition-api'
import {
  pop,
  print,
  popSynonyms,
  printSynonyms,
  PepiconPop,
  PepiconPrint,
  popCatogies,
  printCatogies,
} from 'pepicons'
import sort from 'fast-sort'
import PepInput from '../components/atoms/PepInput.vue'
import IconGrid from '../components/molecules/IconGrid.vue'
import Pickers from '../components/molecules/Pickers.vue'
import { cssVar, setPrimaryColor } from '../helpers/colorHelpers'

export default defineComponent({
  name: 'PageIndex',
  components: { IconGrid, Pickers, PepInput },
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
          document.body.style.backgroundColor = cssVar('ivory')
        }
        if (newVal === cssVar('nightfall')) {
          _.config.stroke = 'white'
          document.body.style.backgroundColor = cssVar('nightfall')
        }
      },
    )

    const darkMode = computed(() => {
      return _.config.background === cssVar('nightfall')
    })
    const categories = (() => {
      const cats = [...new Set(Object.values(popCatogies))]
      sort(cats).desc()
      return cats
    })()

    const iconSet = computed(() => (_.config.type === 'print' ? print : pop))
    const iconNames = computed(() => Object.keys(iconSet.value) as (PepiconPop | PepiconPrint)[])
    const iconNameCategoryDic = computed(() => _.config.type === 'print' ? printCatogies : popCatogies) // prettier-ignore
    const synonyms = computed(() => (_.config.type === 'print' ? printSynonyms : popSynonyms))
    const categoryIconNamesDic = computed(() =>
      Object.entries(iconNameCategoryDic.value).reduce((dic, [iconName, iconCategory]) => {
        if (!(iconCategory in dic)) dic[iconCategory] = []
        const searchInput = _.searchInput.trim()
        if (searchInput) {
          const searchText = searchInput.toLowerCase()
          const _synonyms: string[] = synonyms.value[iconName as PepiconPrint]
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
