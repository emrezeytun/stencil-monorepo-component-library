'use strict';

var index = require('./index-8daJ_kK9.js');

const helloWorldCss = ".hello-world{padding:2rem;text-align:center;font-family:Arial, sans-serif;border:2px solid #007bff;border-radius:8px;background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)}.hello-world h1{color:#007bff;margin:0 0 1rem 0;font-size:2rem}.hello-world p{color:#495057;margin:0;font-size:1.1rem}";

const HelloWorld = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '9b0205aff7b38ba8ee8cf3254970d9180b8a45ea', class: "hello-world" }, index.h("h1", { key: 'bba2dac5382c59f57f1277ac5c9c2c628bfa70b5' }, "Hello World! abc abc"), index.h("p", { key: 'fd44cec7c8ed403b227d685be62f4a5f8c0e9a82' }, "This is a simple Stencil component.")));
    }
};
HelloWorld.style = helloWorldCss;

exports.hello_world = HelloWorld;
//# sourceMappingURL=hello-world.entry.cjs.js.map

//# sourceMappingURL=hello-world.cjs.entry.js.map