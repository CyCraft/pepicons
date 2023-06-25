import { morphPepicon, Pepicon } from 'pepicons'
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
   * - in "pop"/"pencil" style: opacity will be set to the entire icon
   * - in "print" style: opacity will be set to the colored drop shadow
   */
  opacity: { type: Number },
  /**
   * The shadow color is only applied on 'print' type icons and is the same color as the icon color by default
   */
  shadow: { type: String },
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
  type: { type: String as PropType<'pop' | 'print' | 'pencil'>, required: true as const },
  /**
   * The icon name as per the reference at https://pepicons.com
   * @example 'pen'
   * @example 'pen-circle'
   * @example 'pen-circle-filled'
   * @example 'pen-off'
   */
  name: {
    type: String as PropType<Pepicon>,
    required: true as const,
  },
}

export const createSetup = (svg: string, type: 'pop' | 'print' | 'pencil') => {
  return (props: any) => {
    const svgString = computed(() => morphPepicon({ ...props, type, svg }))
    return () =>
      h('div', {
        style: `display:flex;align-items:center;justify-content:center;`,
        innerHTML: svgString.value,
      })
  }
}
