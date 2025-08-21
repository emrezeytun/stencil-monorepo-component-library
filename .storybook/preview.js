// Define custom elements for Stencil components
try {
  // Direct import approach
  import('../packages/helloWorld/dist/hello-world/hello-world.esm.js').then(() => {
    console.log('HelloWorld ESM module loaded');
    console.log('hello-world defined:', !!window.customElements.get('hello-world'));
  }).catch(err => {
    console.error('ESM import failed:', err);
    
    // Fallback to loader
    try {
      const { defineCustomElements } = require('../packages/helloWorld/loader');
      defineCustomElements(window);
      console.log('HelloWorld loader fallback used');
    } catch (loaderError) {
      console.error('Loader fallback failed:', loaderError);
    }
  });
} catch (error) {
  console.error('HelloWorld registration completely failed:', error);
}

// Other components will be added here when needed

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true,
  },
};
