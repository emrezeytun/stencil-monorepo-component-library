import { h } from "@stencil/core";
export class Button {
    constructor() {
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
        return (h("button", { key: '1b1e7119b81dfef7652a86b8c5ec70dd6d65412f', class: `button button--${this.variant} button--${this.size} ${this.disabled ? 'button--disabled' : ''}`, disabled: this.disabled, type: this.type, onClick: this.handleClick }, "dsfsadfasdf", h("slot", { key: '2efa228c2c93c3e01095eaebdf06811a0670df6b' })));
    }
    static get is() { return "comp-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'danger'",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'medium'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            }
        };
    }
    static get events() {
        return [{
                "method": "buttonClick",
                "name": "buttonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=button.js.map
