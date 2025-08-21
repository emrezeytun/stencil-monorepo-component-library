import { h } from "@stencil/core";
export class HelloWorld {
    render() {
        return (h("div", { key: '9b0205aff7b38ba8ee8cf3254970d9180b8a45ea', class: "hello-world" }, h("h1", { key: 'bba2dac5382c59f57f1277ac5c9c2c628bfa70b5' }, "Hello World! abc abc"), h("p", { key: 'fd44cec7c8ed403b227d685be62f4a5f8c0e9a82' }, "This is a simple Stencil component.")));
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
