import * as React from 'react';



// Ensure custom elements are defined
defineCustomElements();

// TypeScript interface for Button props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onButtonClick?: (event: CustomEvent<MouseEvent>) => void;
}

// React component wrapper
exports for different naming conventions
export the define function for manual registration
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
