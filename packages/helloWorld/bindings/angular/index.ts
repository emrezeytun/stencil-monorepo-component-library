import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineCustomElements } from '../../loader';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelloWorldModule {
  constructor() {
    defineCustomElements();
  }
}
