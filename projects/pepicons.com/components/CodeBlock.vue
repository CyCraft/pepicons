<script lang="ts" setup>
// import Prism Editor
// import { PrismEditor } from 'vue-prism-editor'
// import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
// import 'prismjs/components/prism-clike'
// import prismCore from 'prismjs/components/prism-core'
// import 'prismjs/components/prism-javascript'
// import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles

// const { highlight, languages } = prismCore

const props = defineProps<{
  content: string
}>()

// const contentCopy = ref(props.content)
function highlighter(contentCopy: string) {
  return contentCopy
  // return highlight(contentCopy, languages.js) // languages.<insert language> to return html with markup
}
</script>

<template>
  <pre><code>{{ content }}</code></pre>
  <!-- <prism-editor
    v-model="contentCopy"
    class="my-editor"
    :highlight="highlighter"
    lineNumbers
    readonly
  /> -->
</template>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 18px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
