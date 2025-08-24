import * as React from 'react';
import { createReactComponent } from './react-component-lib';
import { defineCustomElements } from '../../loader';

// Ensure custom elements are defined
defineCustomElements();

// TypeScript interface for HelloWorld props
export interface HelloWorldProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// React component wrapper
export const HelloWorld = createReactComponent<HelloWorldProps, HTMLElement>('hello-world');

// Alternative exports for different naming conventions
export const helloWorld = HelloWorld;
export const HelloWorldComponent = HelloWorld;

// Also export the define function for manual registration
export { defineCustomElements };
