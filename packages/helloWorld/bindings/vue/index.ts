import { App, defineComponent, h } from 'vue';
import { defineCustomElements } from '../../loader';

// TypeScript interface for the HelloWorld component props
export interface HelloWorldProps {
  // No props for HelloWorld component currently
}

// Vue wrapper component for import usage
export const HelloWorld = defineComponent({
  name: 'HelloWorld',
  setup(props, { slots, attrs }) {
    // Ensure custom elements are defined
    defineCustomElements();
    
    return () => h('hello-world', attrs, slots.default?.());
  }
});

// Alternative export with lowercase for compatibility
export const helloWorld = HelloWorld;

// Vue plugin for global registration
export const HelloWorldPlugin = {
  install(app: App) {
    defineCustomElements();
  }
};

// Individual component registration for selective use
export const defineHelloWorldElement = () => {
  defineCustomElements();
};

// Export everything for flexibility
export { defineCustomElements };

// Type declarations for better IDE support
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    'hello-world': HelloWorldProps;
    'HelloWorld': HelloWorldProps;
  }
}
