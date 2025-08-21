import { App } from 'vue';
import { defineCustomElements } from '../../loader';

export const HelloWorldPlugin = {
  install(app: App) {
    defineCustomElements();
  }
};

// Also export individual component for manual use
export { defineCustomElements };
