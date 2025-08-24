import * ;
import { createReactComponent } from './react-component-lib';
import { defineCustomElements } from '../../loader';

// Ensure custom elements are defined
defineCustomElements();

// TypeScript interface for Button props
export const Button = createReactComponent<ButtonProps, HTMLElement>('comp-button');

// Alternative exports for different naming conventions
export const button = Button;
export const ButtonComponent = Button;

// Also export the define function for manual registration
export { defineCustomElements };
