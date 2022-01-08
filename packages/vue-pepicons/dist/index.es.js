import { defineComponent, computed, openBlock, createElementBlock, unref } from "vue";
import { pepiconSvgString } from "pepicons";
export { pepiconArray } from "pepicons";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    name: null,
    type: { default: "print" },
    color: null,
    opacity: null,
    stroke: { default: "black" },
    size: { default: "md" }
  },
  setup(__props) {
    const props = __props;
    defineComponent({ name: "Pepicon" });
    const svg = computed(() => {
      return pepiconSvgString({
        name: props.name,
        type: props.type,
        color: props.color,
        opacity: props.opacity,
        size: props.size,
        stroke: props.stroke
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: {
          "display": "flex",
          "justify-content": "center",
          "align-items": "center"
        },
        innerHTML: unref(svg)
      }, null, 8, _hoisted_1);
    };
  }
});
export { _sfc_main as Pepicon };
