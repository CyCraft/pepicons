import { PropType } from 'vue';
import { Pepicon } from 'pepicons';
declare const _default: import("vue").DefineComponent<{
    /**
     * The icon name as per the reference at https://pepicons.com
     * @example 'airplane'
     */
    name: {
        type: PropType<Pepicon>;
        required: true;
    };
    /**
     * Either 'pop' or 'print'
     */
    type: {
        type: PropType<"pop" | "print">;
        default: string;
    };
    /**
     * You can pass a hex or rgba color, this is applied to the svg tag
     *
     * (you can also just manually apply a color via style or a class)
     */
    color: {
        type: StringConstructor;
    };
    /**
     * A number between 0 and 1; where 0 is transparent
     * - in "pop" style: opacity will be set to the entire icon
     * - in "print" style: opacity will be set to the colored drop shadow
     */
    opacity: {
        type: NumberConstructor;
    };
    /**
     * The stroke color is only applied on 'print' type icons and is black by default
     */
    stroke: {
        type: StringConstructor;
        default: string;
    };
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
        type: PropType<string | number>;
        default: string;
    };
}, unknown, unknown, {
    svg(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name?: unknown;
    type?: unknown;
    color?: unknown;
    opacity?: unknown;
    stroke?: unknown;
    size?: unknown;
} & {
    type: "pop" | "print";
    name: Pepicon;
    stroke: string;
    size: string | number;
} & {
    color?: string | undefined;
    opacity?: number | undefined;
}>, {
    type: "pop" | "print";
    stroke: string;
    size: string | number;
}>;
export default _default;
