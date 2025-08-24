import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '../../loader';
import { HelloWorldComponent } from './proxies';

// TypeScript interface for HelloWorld component props
exports})
export class HelloWorldModule {
  constructor() {
    defineCustomElements();
  }

  static forRoot(): ModuleWithProviders<HelloWorldModule> {
    return {
      ngModule,
      providers};
  }
}

// Export individual registration function
export const defineHelloWorldElements = () => {
  defineCustomElements();
};

// Export component for standalone usage with different naming conventions
export { HelloWorldComponent } from './proxies';
export { HelloWorldComponent } from './proxies';
export { HelloWorldComponent } from './proxies';

// Export types for better development experience
export { defineCustomElements };
