import { CompButton } from './comp-button.js';
export { B as Button, d as defineCustomElement, g as getAssetPath, r as render, s as setAssetPath, a as setNonce, b as setPlatformOptions } from './comp-button.js';

const defineCustomElements = (opts) => {
    if (typeof customElements !== 'undefined') {
        [
            CompButton,
        ].forEach(cmp => {
            if (!customElements.get(cmp.is)) {
                customElements.define(cmp.is, cmp, opts);
            }
        });
    }
};

export { defineCustomElements };
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map