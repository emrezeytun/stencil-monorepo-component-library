import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '../../dist/types/components';

const BUTTON_INPUTS = ['variant', 'size', 'disabled', 'type'];
const BUTTON_METHODS = [];

@ProxyCmp({
  inputs: BUTTON_INPUTS,
  methods: BUTTON_METHODS
})
@Component({
  selector: 'comp-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: BUTTON_INPUTS,
})
export class ButtonComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}

export declare interface ButtonComponent extends Components.CompButton {
  /**
   * Emitted when the button is clicked
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}
