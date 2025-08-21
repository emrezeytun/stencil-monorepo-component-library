import type { Components, JSX } from "../types/components";

interface HelloWorld extends Components.HelloWorld, HTMLElement {}
export const HelloWorld: {
    prototype: HelloWorld;
    new (): HelloWorld;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
