import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '../../loader';
import { ButtonComponent } from './proxies';

// TypeScript interface for Button component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Button component events interface
export interface ButtonEvents {
  buttonClick: CustomEvent<MouseEvent>;
}

const DECLARATIONS = [
  ButtonComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: DECLARATIONS
})
export class ButtonModule {
  constructor() {
    defineCustomElements();
  }

  static forRoot(): ModuleWithProviders<ButtonModule> {
    return {
      ngModule: ButtonModule,
      providers: []
    };
  }
}

// Export individual registration function
export const defineButtonElements = () => {
  defineCustomElements();
};

// Export component for standalone usage with different naming conventions
export { ButtonComponent } from './proxies';
export { ButtonComponent as Button } from './proxies';
export { ButtonComponent as button } from './proxies';

// Export types for better development experience
export { defineCustomElements };
