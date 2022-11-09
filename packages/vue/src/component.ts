import { morphPepicon, Pepicon, pepiconArray } from 'pepicons'
import { computed, h, PropType } from 'vue'

export const baseProps = {
  /**
   * You can pass a hex or rgba color, this is applied to the svg tag
   *
   * (you can also just manually apply a color via style or a class)
   */
  color: { type: String },
  /**
   * A number between 0 and 1; where 0 is transparent
   * - in "pop" style: opacity will be set to the entire icon
   * - in "print" style: opacity will be set to the colored drop shadow
   */
  opacity: { type: Number },
  /**
   * The stroke color is only applied on 'print' type icons and is black by default
   */
  stroke: { type: String, default: 'black' },
  /**
   * When you pass a size, it's applied via the style attribute.
   * - 'sm' / 'md' / 'lg' / 'xl' which becomes 20 / 24 / 30 / 36 px
   * - a number for a "px" size. eg. 10 will become 10px
   * - a string for any size value that will be applied to the width
   *
   * (you can also just manually apply a width & height via style or a class)
   * @type { 'sm' | 'md' | 'lg' | 'xl' | number | string }
   */
  size: {
    type: [String, Number] as PropType<'sm' | 'md' | 'lg' | 'xl' | number | string>,
    default: 'md',
  },
}

export const pepiconProps = {
  /**
   * Either 'pop' or 'print'
   * @default 'pop'
   */
  type: { type: String as PropType<'pop' | 'print'>, default: 'pop' },
  /**
   * The icon name as per the reference at https://pepicons.com
   * @example 'airplane'
   */
  name: {
    type: String as PropType<Pepicon>,
    required: true,
    validator: (val: Pepicon) => pepiconArray.includes(val),
  },
}

export const createSetup = (svg: string) => {
  return (props: any) => {
    const svgString = computed(() => morphPepicon({ ...props, svg }))
    return () =>
      h('div', {
        style: `display:flex;align-items:center;justify-content:center;`,
        innerHTML: svgString.value,
      })
  }
}
