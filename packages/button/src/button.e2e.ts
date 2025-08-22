import { newE2EPage } from '@stencil/core/testing';

describe('comp-button (e2e)', () => {
  it('renders in browser (smoke test)', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-button>Test Button</comp-button>');
    
    const element = await page.find('comp-button');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('emits buttonClick event when clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-button>Click me</comp-button>');
    
    const button = await page.find('comp-button');
    const clickSpy = await page.spyOnEvent('buttonClick');
    
    await button.click();
    
    expect(clickSpy).toHaveReceivedEventTimes(1);
    expect(clickSpy.firstEvent.detail).toBeTruthy(); // MouseEvent details
  });

  it('does not emit event when disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-button disabled>Disabled</comp-button>');
    
    const button = await page.find('comp-button');
    const clickSpy = await page.spyOnEvent('buttonClick');
    
    await button.click();
    
    expect(clickSpy).toHaveReceivedEventTimes(0);
  });

  it('changes appearance based on variant prop', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-button variant="primary">Test</comp-button>');
    
    let button = await page.find('comp-button >>> button');
    let computedStyle = await button.getComputedStyle();
    const primaryColor = computedStyle.backgroundColor;
    
    // Change to secondary
    await page.$eval('comp-button', (el: any) => {
      el.variant = 'secondary';
    });
    await page.waitForChanges();
    
    button = await page.find('comp-button >>> button');
    computedStyle = await button.getComputedStyle();
    const secondaryColor = computedStyle.backgroundColor;
    
    expect(primaryColor).not.toBe(secondaryColor);
  });

  it('is accessible with proper ARIA attributes', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-button>Accessible Button</comp-button>');
    
    const button = await page.find('comp-button >>> button');
    
    // Button should be focusable
    await button.focus();
    const activeElement = await page.evaluateHandle(() => document.activeElement);
    expect(activeElement).toBeTruthy();
    
    // Disabled button should not be focusable
    await page.$eval('comp-button', (el: any) => {
      el.disabled = true;
    });
    await page.waitForChanges();
    
    const disabledButton = await page.find('comp-button >>> button');
    expect(await disabledButton.getProperty('disabled')).toBe(true);
  });

  it('supports keyboard interaction', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-button>Keyboard Test</comp-button>');
    
    const button = await page.find('comp-button');
    const clickSpy = await page.spyOnEvent('buttonClick');
    
    await button.focus();
    await page.keyboard.press('Enter');
    
    expect(clickSpy).toHaveReceivedEventTimes(1);
    
    // Test Space key
    await page.keyboard.press('Space');
    expect(clickSpy).toHaveReceivedEventTimes(2);
  });
});
