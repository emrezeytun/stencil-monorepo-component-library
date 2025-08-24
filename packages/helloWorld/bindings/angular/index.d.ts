




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
 from './proxies';
 from './proxies';
 from './proxies';

// Export types for better development experience
;

export declare const HelloWorld: any;
export declare const helloWorld: any;
export declare const HelloWorldComponent: any;
export declare const Button: any;
export declare const button: any;
export declare const ButtonComponent: any;
export declare const HelloWorldPlugin: any;
export declare const ButtonPlugin: any;
export declare const defineCustomElements: any;
