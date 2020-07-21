import { PepiconPop, PepiconPrint } from './src/index';
export * from './src/index';
export declare type Options = {
    /**
     * This option is only for 'print' type icons. The default stroke color is black. Suggested to change to white on dark backgrounds.
     */
    stroke: string;
};
export declare function pepiconSvgString(iconName: PepiconPop, type: 'pop', options?: Options): string;
export declare function pepiconSvgString(iconName: PepiconPrint, type: 'print', options?: Options): string;
