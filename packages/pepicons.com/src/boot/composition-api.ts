import VueCompositionApi from '@vue/composition-api'
import { boot } from 'quasar/wrappers'

import IconInfo from '../components/molecules/IconInfo.vue'
import DialogWrapper from '../components/dialogs/DialogWrapper.vue'

export default boot(({ Vue }) => {
  Vue.use(VueCompositionApi)

  Vue.component(IconInfo.name, IconInfo)
  Vue.component(DialogWrapper.name, DialogWrapper)
})
