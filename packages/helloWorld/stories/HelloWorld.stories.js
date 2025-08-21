// Helper function to create hello-world element
const createHelloWorld = () => {
  const component = document.createElement('hello-world');
  
  // Add some debug info
  console.log('Creating hello-world element:', component);
  
  // Add a fallback in case the component doesn't load
  setTimeout(() => {
    if (!component.shadowRoot && component.innerHTML === '') {
      component.innerHTML = '<p style="color: red; padding: 20px;">HelloWorld component not loaded - check console</p>';
    }
  }, 1000);
  
  return component;
};

const meta = {
  title: 'Components/HelloWorld',
  tags: ['autodocs'],
  render: () => {
    // Try multiple approaches
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="padding: 20px; border: 1px solid #ccc; margin: 10px;">
        <h3>Direct HTML approach:</h3>
        <hello-world></hello-world>
      </div>
      <div style="padding: 20px; border: 1px solid #ccc; margin: 10px;">
        <h3>Programmatic approach:</h3>
        <div id="programmatic-container"></div>
      </div>
      <div style="padding: 20px; border: 1px solid #ccc; margin: 10px;">
        <h3>Fallback (if component fails):</h3>
        <div style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
          <h1 style="color: #007bff;">Hello World!</h1>
          <p>This is a fallback - the Stencil component should appear above</p>
        </div>
      </div>
    `;
    
    // Add programmatic element
    setTimeout(() => {
      const programmaticContainer = container.querySelector('#programmatic-container');
      const element = createHelloWorld();
      programmaticContainer.appendChild(element);
      
      // Debug info
      console.log('Container:', container);
      console.log('Hello-world elements:', container.querySelectorAll('hello-world'));
      console.log('Custom element defined:', !!window.customElements.get('hello-world'));
    }, 100);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple Hello World component built with Stencil. Perfect for testing and getting started.',
      },
    },
  },
};

export default meta;

export const Default = {
  name: 'Hello World',
  parameters: {
    docs: {
      description: {
        story: 'The basic Hello World component with default styling.',
      },
    },
  },
};

export const Multiple = {
  name: 'Multiple Components',
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '1rem';
    container.style.flexDirection = 'column';
    
    // Create three hello-world components
    for (let i = 0; i < 3; i++) {
      const component = createHelloWorld();
      container.appendChild(component);
    }
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple Hello World components displayed together.',
      },
    },
  },
};
