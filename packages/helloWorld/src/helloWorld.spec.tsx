import { newSpecPage } from '@stencil/core/testing';
import { HelloWorld } from './helloWorld';

describe('hello-world', () => {
  it('renders without crashing (smoke test)', async () => {
    const page = await newSpecPage({
      components: [HelloWorld],
      html: `<hello-world></hello-world>`,
    });
    
    // Basic render check
    expect(page.root).toBeTruthy();
    expect(page.root?.tagName).toBe('HELLO-WORLD');
  });

  it('renders with correct content', async () => {
    const page = await newSpecPage({
      components: [HelloWorld],
      html: `<hello-world></hello-world>`,
    });
    
    // Check shadow DOM content
    const shadowRoot = page.root?.shadowRoot;
    expect(shadowRoot).toBeTruthy();
    
    const h1 = shadowRoot?.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1?.textContent).toContain('HMR Test 2024');
    
    const p = shadowRoot?.querySelector('p');
    expect(p).toBeTruthy();
    expect(p?.textContent).toContain('aaaaa bbbb');
  });

  it('has correct CSS classes', async () => {
    const page = await newSpecPage({
      components: [HelloWorld],
      html: `<hello-world></hello-world>`,
    });
    
    const div = page.root?.shadowRoot?.querySelector('div');
    expect(div).toHaveClass('hello-world');
  });

  it('matches snapshot', async () => {
    const page = await newSpecPage({
      components: [HelloWorld],
      html: `<hello-world></hello-world>`,
    });
    
    expect(page.root).toMatchSnapshot();
  });
});
