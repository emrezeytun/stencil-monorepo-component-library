import type { Components, JSX } from "../types/components";

interface CompButton extends Components.CompButton, HTMLElement {}
export const CompButton: {
    prototype: CompButton;
    new (): CompButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
