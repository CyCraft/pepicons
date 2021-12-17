import { PropType } from 'vue';
import { Pepicon } from 'pepicons';
declare const _default: import("vue").DefineComponent<{
    /**
     * The icon name as per the reference at https://pepicons.com
     * @type {'airplane' | 'angle-down' | 'angle-left' | 'angle-right' | 'angle-up' | 'battery' | 'bell' | 'bell-off' | 'bicycle' | 'bluetooth' | 'book' | 'bookmark' | 'bookmark-filled' | 'building' | 'calculator' | 'calendar' | 'camera' | 'can' | 'car' | 'cart' | 'checkmark' | 'circle' | 'circle-filled' | 'clipboard' | 'clock' | 'cloud' | 'cloud-down' | 'cloud-down-filled' | 'cloud-filled' | 'cloud-up' | 'cloud-up-filled' | 'coctail' | 'color-picker' | 'contract' | 'controller' | 'credit-card' | 'cup' | 'division' | 'dots-x' | 'dots-y' | 'dress' | 'duplicate' | 'electricity' | 'exclamation' | 'exclamation-filled' | 'expand' | 'eye' | 'eye-closed' | 'eye-off' | 'file' | 'film-frame' | 'flag' | 'flower' | 'flower-bud' | 'folder' | 'gear' | 'gift' | 'grab' | 'hamburger' | 'headphone' | 'heart' | 'house' | 'info' | 'info-filled' | 'internet' | 'key' | 'knive-fork' | 'letter' | 'lock-closed' | 'lock-open' | 'loop' | 'loop-minus' | 'loop-plus' | 'map' | 'microphone' | 'minus' | 'monitor' | 'monitor2' | 'moon' | 'moon-filled' | 'motorcycle' | 'music-note-double' | 'music-note-single' | 'open' | 'paint-pallet' | 'pen' | 'person' | 'person-filled' | 'phone' | 'photo-camera' | 'pill' | 'pinpoint' | 'pinpoint-filled' | 'pinpoint-off' | 'pinpoint-off-filled' | 'plus' | 'power' | 'printer' | 'refresh' | 'reload' | 'scissors' | 'send' | 'share-android' | 'share-ios' | 'smartphone' | 'smartphone2' | 'soft-drink' | 'speaker-high' | 'speaker-low' | 'speaker-off' | 'square' | 'square-filled' | 'star' | 'sun' | 'sun-filled' | 'syringe' | 't-shirt' | 'taxi' | 'television' | 'text-bubble' | 'times' | 'tool' | 'train' | 'trash' | 'triangle-down' | 'triangle-down-filled' | 'triangle-left' | 'triangle-left-filled' | 'triangle-right' | 'triangle-right-filled' | 'triangle-up' | 'triangle-up-filled' | 'truck' | 'umbrella' | 'wifi'}
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