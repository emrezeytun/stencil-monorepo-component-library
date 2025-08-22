// Interactive Button stories with controls
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'Button variant/style'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button'
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Button type'
    },
    text: {
      control: { type: 'text' },
      description: 'Button text content'
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    text: 'Click me!'
  }
};

export const Interactive = {
  render: (args) => {
    const button = document.createElement('comp-button');
    button.setAttribute('variant', args.variant);
    button.setAttribute('size', args.size);
    button.setAttribute('type', args.type);
    if (args.disabled) button.setAttribute('disabled', 'true');
    button.textContent = args.text;
    
    // Event listener ekle
    button.addEventListener('buttonClick', (e) => {
      alert(`Button clicked! Variant: ${args.variant}, Size: ${args.size}`);
    });
    
    return button;
  }
};

export const AllVariants = {
  render: () => {
    const div = document.createElement('div');
    div.style.padding = '20px';
    div.style.display = 'flex';
    div.style.gap = '12px';
    div.style.flexDirection = 'column';
    
    div.innerHTML = `
      <h3>All Button Variants</h3>
      <div style="display: flex; gap: 12px; align-items: center;">
        <comp-button variant="primary">Primary</comp-button>
        <comp-button variant="secondary">Secondary</comp-button>
        <comp-button variant="danger">Danger</comp-button>
      </div>
      
      <h3>All Sizes</h3>
      <div style="display: flex; gap: 12px; align-items: center;">
        <comp-button size="small">Small</comp-button>
        <comp-button size="medium">Medium</comp-button>
        <comp-button size="large">Large</comp-button>
      </div>
      
      <h3>Disabled States</h3>
      <div style="display: flex; gap: 12px; align-items: center;">
        <comp-button disabled>Disabled Primary</comp-button>
        <comp-button variant="secondary" disabled>Disabled Secondary</comp-button>
      </div>
    `;
    
    return div;
  }
};