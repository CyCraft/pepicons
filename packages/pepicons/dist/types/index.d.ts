import { Pepicon } from './src/index';
export * from './src/index';
export declare type GetPepiconPayload = {
    /**
     * The icon name as per the reference at https://pepicons.com
     */
    name: Pepicon;
    /**
     * Either 'pop' or 'print'
     */
    type: 'pop' | 'print';
};
export declare type MorphPepiconPayload = {
    /**
     * The Pepicon SVG string
     */
    svg: string;
    /**
     * Either 'pop' or 'print'
     */
    type: 'pop' | 'print';
    /**
     * A hex(a) or rgb(a) color
     * - "pop" type icons: this is the icon color
     * - "print" type icons: this is the shadow color (you can use "stroke" to set a stroke color)
     */
    color?: string;
    /**
     * A number between 0 and 1; where 0 is transparent
     * - "pop" type icons: opacity will be set to the entire icon
     * - "print" type icons: opacity will be set to the colored drop shadow
     */
    opacity?: number;
    /**
     * When you pass a size, it's applied via the style attribute.
     * - 'sm' / 'md' / 'lg' / 'xl' which becomes 20 / 24 / 30 / 36 px
     * - a number for a "px" size. eg. 10 will become 10px
     * - a string for any size value that will be applied to the width
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | number | string;
    /**
     * The stroke color is only applied on 'print' type icons and is black by default
     */
    stroke?: string;
};
/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export declare function getPepicon(payload: GetPepiconPayload): string;
/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export declare function morphPepicon(payload: MorphPepiconPayload): string;
/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
export declare function pepiconSvgString(payload: GetPepiconPayload & Omit<MorphPepiconPayload, 'svg'>): string;
