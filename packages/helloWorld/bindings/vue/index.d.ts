


// TypeScript interface for the HelloWorld component props
export interface HelloWorldProps {
  // No props for HelloWorld component currently
}

// Vue wrapper component for import usage
export with lowercase for compatibility
;

// Type declarations for better IDE support
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    'hello-world': HelloWorldProps;
    'HelloWorld': HelloWorldProps;
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
