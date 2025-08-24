import { App } from 'vue';
import { defineCustomElements } from '../../loader';

// TypeScript interface for the Button component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Vue plugin for global registration
export const ButtonPlugin = {
  install(app: App) {
    defineCustomElements();
  }
};

// Individual component registration for selective use
export const defineButtonElement = () => {
  defineCustomElements();
};

// Export everything for flexibility
export { defineCustomElements };

// Type declarations for better IDE support
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    'comp-button': ButtonProps;
  }
}
