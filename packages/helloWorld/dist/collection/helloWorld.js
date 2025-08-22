import { h } from "@stencil/core";
export class HelloWorld {
    render() {
        return (h("div", { key: '9b0205aff7b38ba8ee8cf3254970d9180b8a45ea', class: "hello-world" }, h("h1", { key: 'bba2dac5382c59f57f1277ac5c9c2c628bfa70b5' }, "\uD83D\uDD25 UPDATED! HMR Test 2024! tttt abc abc 222"), h("p", { key: '92460e3d0baa0bb9dcc92c13d5a0e370c40bd54d' }, "Bu de\u011Fi\u015Fiklik otomatik g\u00F6r\u00FCnmeli - Test!  5555 \uD83C\uDFAF \u26A1 aaaaa bbbb!")));
    }
    static get is() { return "hello-world"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["helloWorld.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["helloWorld.css"]
        };
    }
}
//# sourceMappingURL=helloWorld.js.map
