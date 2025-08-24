


// TypeScript interface for the Button component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Vue wrapper component for import usage
export with lowercase for compatibility
;

// Type declarations for better IDE support
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    'comp-button': ButtonProps;
    'Button': ButtonProps;
  }
}

export declare const HelloWorld: any;
export declare const helloWorld: any;
export declare const HelloWorldComponent: any;
export declare const Button: any;
export declare const button: any;
export declare const ButtonComponent: any;
export declare const HelloWorldPlugin: any;
export declare const ButtonPlugin: any;
export declare const defineCustomElements: any;
