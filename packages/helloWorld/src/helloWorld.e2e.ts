import { newE2EPage } from '@stencil/core/testing';

describe('hello-world (e2e)', () => {
  it('renders in browser (smoke test)', async () => {
    const page = await newE2EPage();
    await page.setContent('<hello-world></hello-world>');
    
    const element = await page.find('hello-world');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('displays correct text content', async () => {
    const page = await newE2EPage();
    await page.setContent('<hello-world></hello-world>');
    
    const element = await page.find('hello-world');
    const text = await element.getProperty('textContent');
    
    expect(text).toContain('HMR Test 2024');
    expect(text).toContain('aaaaa bbbb');
  });

  it('has accessible elements', async () => {
    const page = await newE2EPage();
    await page.setContent('<hello-world></hello-world>');
    
    // Check if h1 exists for screen readers
    const h1 = await page.find('hello-world >>> h1');
    expect(h1).toBeTruthy();
    
    // Check if content is visible
    const isVisible = await h1.isVisible();
    expect(isVisible).toBe(true);
  });
});
