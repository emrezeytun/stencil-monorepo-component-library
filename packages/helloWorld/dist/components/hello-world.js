import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const helloWorldCss = ".hello-world{padding:2rem;text-align:center;font-family:Arial, sans-serif;border:2px solid #007bff;border-radius:8px;background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)}.hello-world h1{color:#007bff;margin:0 0 1rem 0;font-size:2rem}.hello-world p{color:#495057;margin:0;font-size:1.1rem}";

const HelloWorld$1 = /*@__PURE__*/ proxyCustomElement(class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: '9b0205aff7b38ba8ee8cf3254970d9180b8a45ea', class: "hello-world" }, h("h1", { key: 'bba2dac5382c59f57f1277ac5c9c2c628bfa70b5' }, "\uD83D\uDD25 UPDATED! HMR Test 2024! tttt abc abc 222"), h("p", { key: '92460e3d0baa0bb9dcc92c13d5a0e370c40bd54d' }, "Bu de\u011Fi\u015Fiklik otomatik g\u00F6r\u00FCnmeli - Test!  5555 \uD83C\uDFAF \u26A1 aaaaa bbbb!")));
    }
    static get style() { return helloWorldCss; }
}, [257, "hello-world"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["hello-world"];
    components.forEach(tagName => { switch (tagName) {
        case "hello-world":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HelloWorld$1);
            }
            break;
    } });
}

const HelloWorld = HelloWorld$1;
const defineCustomElement = defineCustomElement$1;

export { HelloWorld, defineCustomElement };
//# sourceMappingURL=hello-world.js.map

//# sourceMappingURL=hello-world.js.map