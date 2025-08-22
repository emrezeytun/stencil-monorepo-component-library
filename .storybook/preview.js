// Load Stencil components
console.log('Starting component loading...');

// Try multiple loading strategies
async function loadHelloWorld() {
  try {
    // Strategy 1: Use the CJS loader
    const { defineCustomElements } = await import('../packages/helloWorld/loader/index.cjs.js');
    await defineCustomElements(window);
    console.log('HelloWorld loaded via CJS loader');
    return true;
  } catch (error) {
    console.warn('CJS loader failed:', error);
  }

  try {
    // Strategy 2: Direct ESM import
    await import('../packages/helloWorld/dist/hello-world/hello-world.esm.js');
    console.log('HelloWorld loaded via ESM');
    return true;
  } catch (error) {
    console.warn('ESM loading failed:', error);
  }

  try {
    // Strategy 3: Use the main loader
    const { defineCustomElements } = await import('../packages/helloWorld/loader');
    await defineCustomElements(window);
    console.log('HelloWorld loaded via main loader');
    return true;
  } catch (error) {
    console.warn('Main loader failed:', error);
  }

  console.error('All HelloWorld loading strategies failed');
  return false;
}

// Load HelloWorld component
loadHelloWorld().then(success => {
  if (success) {
    console.log('HelloWorld custom element defined:', !!window.customElements.get('hello-world'));
  }
});

// Load Button component - ULTRA SIMPLE
async function loadButton() {
  try {
    // Direkt script'i import et
    await import('../packages/button/dist/button/button.esm.js');
    console.log('✅ Button component loaded successfully!');
    return true;
  } catch (error) {
    console.error('❌ Failed to load Button:', error);
    return false;
  }
}

loadButton().then(success => {
  setTimeout(() => {
    console.log('🔍 Button defined?', !!window.customElements.get('comp-button'));
  }, 500);
});

// Hot reload support - Vite style
if (import.meta.hot) {
  import.meta.hot.accept('../packages/helloWorld/dist/hello-world/hello-world.esm.js', () => {
    console.log('HelloWorld component reloaded!');
    window.location.reload();
  });
}

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
