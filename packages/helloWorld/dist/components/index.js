import { HelloWorld } from './hello-world.js';
export { g as getAssetPath, r as render, s as setAssetPath, a as setNonce, b as setPlatformOptions } from './hello-world.js';

const defineCustomElements = (opts) => {
    if (typeof customElements !== 'undefined') {
        [
            HelloWorld,
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