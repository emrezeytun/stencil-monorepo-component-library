import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import type { Components } from '../../dist/types/components';
export declare class ButtonComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface ButtonComponent extends Components.CompButton {
    /**
     * Emitted when the button is clicked
     */
    buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}
