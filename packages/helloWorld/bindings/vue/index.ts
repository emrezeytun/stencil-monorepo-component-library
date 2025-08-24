import { App } from 'vue';
import { defineCustomElements } from '../../loader';

// TypeScript interface for the HelloWorld component props
export interface HelloWorldProps {
  // No props for HelloWorld component currently
}

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
  }
}
