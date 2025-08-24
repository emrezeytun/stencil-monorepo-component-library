import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '../../dist/types/components';

const HELLO_WORLD_INPUTS: string[] = [];
const HELLO_WORLD_METHODS: string[] = [];

@ProxyCmp({
  inputs: HELLO_WORLD_INPUTS,
  methods: HELLO_WORLD_METHODS
})
@Component({
  selector: 'hello-world',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: HELLO_WORLD_INPUTS,
})
export class HelloWorldComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface HelloWorldComponent extends Components.HelloWorld {}
