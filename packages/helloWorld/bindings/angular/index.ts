import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '../../loader';
import { HelloWorldComponent } from './proxies';

// TypeScript interface for HelloWorld component props
export interface HelloWorldProps {
  // No props for HelloWorld component currently
}

// HelloWorld component events interface  
export interface HelloWorldEvents {
  // No events for HelloWorld component currently
}

const DECLARATIONS = [
  HelloWorldComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: DECLARATIONS
})
export class HelloWorldModule {
  constructor() {
    defineCustomElements();
  }

  static forRoot(): ModuleWithProviders<HelloWorldModule> {
    return {
      ngModule: HelloWorldModule,
      providers: []
    };
  }
}

// Export individual registration function
export const defineHelloWorldElements = () => {
  defineCustomElements();
};

// Export component for standalone usage
export { HelloWorldComponent } from './proxies';

// Export types for better development experience
export { defineCustomElements };
