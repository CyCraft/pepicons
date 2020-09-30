<template>
  <q-page padding :class="`page-index q-gutter-lg ${darkMode ? 'dark-mode' : ''}`">
    <Pickers v-model="_.config" />
    <div class="pa-md">
      <PepInput
        :color="_.config.color"
        v-model="_.searchInput"
        :debounce="200"
        :isDarkMode="darkMode"
      />
    </div>
    <template v-for="category in categories">
      <div class="_section" v-if="categoryIconNamesDic[category].length" :key="category">
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
  </q-page>
</template>

<style lang="sass">
// $
.page-index
  transition: background-color 500ms
  background-color: #FAFAFA
  &.dark-mode
    background-color: $c-nightfall
  ._section
    +mb($xxl)
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
        }
        if (newVal === cssVar('nightfall')) {
          _.config.stroke = 'white'
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
