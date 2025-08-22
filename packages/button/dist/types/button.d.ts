import { EventEmitter } from './stencil-public-runtime';
export declare class Button {
    variant: 'primary' | 'secondary' | 'danger';
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    type: 'button' | 'submit' | 'reset';
    buttonClick: EventEmitter<MouseEvent>;
    private handleClick;
    render(): any;
}
