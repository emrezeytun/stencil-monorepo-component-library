import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '../../loader';
import { ButtonComponent } from './proxies';

// TypeScript interface for Button component props
exports})
export class ButtonModule {
  constructor() {
    defineCustomElements();
  }

  static forRoot(): ModuleWithProviders<ButtonModule> {
    return {
      ngModule,
      providers};
  }
}

// Export individual registration function
export const defineButtonElements = () => {
  defineCustomElements();
};

// Export component for standalone usage with different naming conventions
export { ButtonComponent } from './proxies';
export { ButtonComponent } from './proxies';
export { ButtonComponent } from './proxies';

// Export types for better development experience
export { defineCustomElements };
