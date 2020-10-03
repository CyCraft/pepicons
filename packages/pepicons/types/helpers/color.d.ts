/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
export declare function textToRgba(color: string): {
    r: number;
    g: number;
    b: number;
    a?: number;
};
