import React from 'react';
import { createReactComponent } from './react-component-lib';
import { Button as ButtonElement } from '../../dist/components/button';

export const Button = createReactComponent<{
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onButtonClick?: (event: CustomEvent<MouseEvent>) => void;
}, HTMLElement>('comp-button', ButtonElement);
