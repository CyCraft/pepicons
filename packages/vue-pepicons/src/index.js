import Pepicon from './components/Pepicon.vue'

export { Pepicon }

export default {
  install (Vue) {
    Vue.component(Pepicon.name, Pepicon)
  },
}
