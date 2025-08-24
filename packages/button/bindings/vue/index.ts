import { App, defineComponent, h } from 'vue';
import { defineCustomElements } from '../../loader';

// TypeScript interface for the Button component props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Vue wrapper component for import usage
export const Button = defineComponent({
  name: 'Button',
  props: {
    variant: String as () => 'primary' | 'secondary' | 'danger',
    size: String as () => 'small' | 'medium' | 'large',
    disabled: Boolean,
    type: String as () => 'button' | 'submit' | 'reset'
  },
  emits: ['buttonClick'],
  setup(props, { slots, attrs, emit }) {
    // Ensure custom elements are defined
    defineCustomElements();
    
    const handleButtonClick = (event: CustomEvent) => {
      emit('buttonClick', event);
    };
    
    return () => h('comp-button', {
      ...attrs,
      ...props,
      onButtonClick: handleButtonClick
    }, slots.default?.());
  }
});

// Alternative export with lowercase for compatibility
export const button = Button;

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
    'Button': ButtonProps;
  }
}
