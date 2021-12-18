import { defineComponent, openBlock, createElementBlock } from "vue";
import { pepiconArray, pepiconSvgString } from "pepicons";
export { pepiconArray } from "pepicons";
var Pepicon_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "Pepicon",
  props: {
    name: {
      type: String,
      required: true,
      validator: (val) => pepiconArray.includes(val)
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "pepicon",
    innerHTML: _ctx.svg
  }, null, 8, _hoisted_1);
}
var Pepicon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Pepicon };
