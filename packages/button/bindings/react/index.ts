import * as React from 'react';
import { createReactComponent } from './react-component-lib';
import { defineCustomElements } from '../../loader';

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
export const Button = createReactComponent<ButtonProps, HTMLElement>('comp-button');

// Also export the define function for manual registration
export { defineCustomElements };
