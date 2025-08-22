import { r as registerInstance, c as createEvent, h } from './index-vqxAA_jm.js';

const buttonCss = ".button{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:6px;font-family:inherit;font-weight:500;cursor:pointer;transition:all 0.2s ease;text-decoration:none;box-sizing:border-box}.button--small{padding:8px 16px;font-size:14px;line-height:1.4}.button--medium{padding:12px 20px;font-size:16px;line-height:1.5}.button--large{padding:16px 24px;font-size:18px;line-height:1.6}.button--primary{background-color:#007bff;color:white}.button--primary:hover:not(.button--disabled){background-color:#0056b3;transform:translateY(-1px)}.button--secondary{background-color:#6c757d;color:white}.button--secondary:hover:not(.button--disabled){background-color:#545b62;transform:translateY(-1px)}.button--danger{background-color:#dc3545;color:white}.button--danger:hover:not(.button--disabled){background-color:#c82333;transform:translateY(-1px)}.button--disabled{opacity:0.6;cursor:not-allowed;transform:none !important}.button:focus{outline:2px solid #007bff;outline-offset:2px}";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClick = createEvent(this, "buttonClick");
        this.variant = 'primary';
        this.size = 'medium';
        this.disabled = false;
        this.type = 'button';
        this.handleClick = (event) => {
            if (!this.disabled) {
                this.buttonClick.emit(event);
            }
        };
    }
    render() {
        return (h("button", { key: '1b1e7119b81dfef7652a86b8c5ec70dd6d65412f', class: `button button--${this.variant} button--${this.size} ${this.disabled ? 'button--disabled' : ''}`, disabled: this.disabled, type: this.type, onClick: this.handleClick }, h("slot", { key: 'ed9c5fd67306120e2dcc0dd3b4a05af3ab92b689' })));
    }
};
Button.style = buttonCss;

export { Button };
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map