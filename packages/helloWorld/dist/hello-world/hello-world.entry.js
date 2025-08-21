import { r as registerInstance, h } from './index-BtMmPAbo.js';

const helloWorldCss = ".hello-world{padding:2rem;text-align:center;font-family:Arial, sans-serif;border:2px solid #007bff;border-radius:8px;background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)}.hello-world h1{color:#007bff;margin:0 0 1rem 0;font-size:2rem}.hello-world p{color:#495057;margin:0;font-size:1.1rem}";

const HelloWorld = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '8f39b1b55c54187562bebe17dc88dc6cda3cb6a2', class: "hello-world" }, h("h1", { key: '4b7d9596362d878ccb376051be05af095e04d582' }, "\uD83D\uDE80 Hot Reload Test! HMR Working!"), h("p", { key: '15ee5db470f57bf23c9b36513419bd03865149b8' }, "Bu de\u011Fi\u015Fiklik build almadan g\u00F6r\u00FCnmeli!")));
    }
};
HelloWorld.style = helloWorldCss;

export { HelloWorld as hello_world };
//# sourceMappingURL=hello-world.entry.esm.js.map

//# sourceMappingURL=hello-world.entry.js.map