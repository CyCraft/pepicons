import { defineComponent, openBlock, createElementBlock } from "vue";
import { pepiconSvgString } from "pepicons";
var script = defineComponent({
  name: "Pepicon",
  props: {
    name: {
      type: String,
      required: true
    },
    type: { type: String, default: "print" },
    color: { type: String },
    opacity: { type: Number },
    stroke: { type: String, default: "black" },
    size: {
      type: [String, Number],
      default: "md"
    }
  },
  computed: {
    svg() {
      const { name, type, color, opacity, size, stroke } = this;
      return pepiconSvgString({ name, type, color, opacity, size, stroke });
    }
  }
});
const _hoisted_1 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "pepicon",
    innerHTML: _ctx.svg
  }, null, 8, _hoisted_1);
}
var Pepicon_vue_vue_type_style_index_0_id_04006e8d_lang = "";
script.render = render;
export { script as Pepicon };
