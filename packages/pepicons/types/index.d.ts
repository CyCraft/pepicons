import { PepiconPop, PepiconPrint } from './src/index';
export * from './src/index';
export declare type Options = {
    /**
     * You can pass a hex or rgba color, this is applied via the style attribute. The SVG itself then uses currentColor.
     */
    color?: string;
    /**
     * When you pass a size, it's applied via the style attribute.
     * - 'sm' / 'md' / 'lg' / 'xl' which becomes 20 / 24 / 30 / 36 px
     * - a number for a "px" size. eg. 10 will become 10px
     * - a string for any size value that will be applied to the width
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | number | string;
    /**
     * This option is only for 'print' type icons. The default stroke color is black. Suggested to change to white on dark backgrounds.
     */
    stroke?: string;
};
export declare function pepiconSvgString(iconName: PepiconPop, type: 'pop', options?: Options): string;
export declare function pepiconSvgString(iconName: PepiconPrint, type: 'print', options?: Options): string;
