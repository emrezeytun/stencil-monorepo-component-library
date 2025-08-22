import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('comp-button', () => {
  it('renders without crashing (smoke test)', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<comp-button>Test</comp-button>`,
    });
    
    expect(page.root).toBeTruthy();
    expect(page.root?.tagName).toBe('COMP-BUTTON');
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<comp-button>Click me</comp-button>`,
    });
    
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button).toBeTruthy();
    // Note: Slot content might not be available in unit tests
    expect(button?.type).toBe('button');
    expect(button?.hasAttribute('disabled')).toBe(false);
  });

  it('applies variant classes correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<comp-button variant="secondary">Test</comp-button>`,
    });
    
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.className).toContain('button--secondary');
    expect(button?.className).toContain('button--medium'); // default size
  });

  it('applies size classes correctly', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<comp-button size="large">Test</comp-button>`,
    });
    
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.className).toContain('button--large');
    expect(button?.className).toContain('button--primary'); // default variant
  });

  it('handles disabled state', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<comp-button disabled>Test</comp-button>`,
    });
    
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.hasAttribute('disabled')).toBe(true);
    expect(button?.className).toContain('button--disabled');
  });

  it('sets correct button type', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<comp-button type="submit">Submit</comp-button>`,
    });
    
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.type).toBe('submit');
  });

  it('matches snapshot for all variants', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <comp-button variant="primary">Primary</comp-button>
        <comp-button variant="secondary">Secondary</comp-button>
        <comp-button variant="danger">Danger</comp-button>
      `,
    });
    
    expect(page.root).toMatchSnapshot();
  });
});
