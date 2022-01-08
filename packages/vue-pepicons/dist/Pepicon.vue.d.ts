import { Pepicon } from 'pepicons';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: import("vue").PropType<Pepicon>;
        required: true;
    };
    type: {
        type: import("vue").PropType<"pop" | "print">;
    } & {
        default: string;
    };
    color: {
        type: import("vue").PropType<string>;
    };
    opacity: {
        type: import("vue").PropType<number>;
    };
    stroke: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    size: {
        type: import("vue").PropType<string | number>;
    } & {
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
