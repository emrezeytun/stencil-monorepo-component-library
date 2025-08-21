import type { Preview } from '@storybook/html-vite';

// Import Stencil components for global registration
// Note: Make sure to build the packages first to generate the loader files

// Define custom elements immediately in preview
window.addEventListener('DOMContentLoaded', () => {
  try {
    const { defineCustomElements: defineButtonElements } = require('../packages/button/loader');
    defineButtonElements();
    console.log('Button components loaded successfully');
  } catch (error) {
    console.warn('Button loader not found. Run "npm run build" in packages/button first.', error);
  }

  try {
    const { defineCustomElements: defineInputElements } = require('../packages/input/loader');
    defineInputElements();
    console.log('Input components loaded successfully');
  } catch (error) {
    console.warn('Input loader not found. Run "npm run build" in packages/input first.', error);
  }
});

// Also try immediate loading
try {
  const { defineCustomElements: defineButtonElements } = require('../packages/button/loader');
  defineButtonElements();
} catch (error) {
  console.warn('Button loader immediate load failed:', error);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        large: {
          name: 'Large Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
