




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
