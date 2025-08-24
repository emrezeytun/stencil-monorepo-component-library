import { defineComponent, h } from 'vue';
import { defineCustomElements } from '../../loader';

// TypeScript interface for the Button component props
export const Button = defineComponent({
  name: 'Button',
  props: {
    variant: String,
    size: String,
    disabled: Boolean,
    type: String
  },
  emits: ['buttonClick'],
  setup(props, { slots, attrs, emit }) {
    // Ensure custom elements are defined
    defineCustomElements();
    
    const handleButtonClick = (event) => {
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
  install(app) {
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
