# Storybook Configuration

This directory contains the Storybook configuration for the component monorepo.

## Overview

This Storybook setup is configured to:
- Automatically discover stories from all packages in the monorepo
- Support Stencil web components
- Include common addons for component development and testing

## Running Storybook

### Global Storybook (Recommended)
Run Storybook for all packages from the root:
```bash
npm run storybook
```

This will start Storybook on `http://localhost:6010` and include stories from all packages.

### Package-specific Storybook
Run Storybook for individual packages:

**Button Package:**
```bash
cd packages/button
npm run storybook  # Runs on http://localhost:6006
```

**Input Package:**
```bash
cd packages/input
npm run storybook  # Runs on http://localhost:6007
```

**All packages in parallel:**
```bash
npm run storybook:packages
```

This runs each package's individual Storybook instance in parallel.

## Story Discovery

Stories are automatically discovered from:
- `packages/*/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)` (preferred location)
- `packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)` (legacy support)
- `packages/*/src/**/*.mdx`
- `packages/*/stories/**/*.mdx`

## Configuration Files

- **main.ts**: Main Storybook configuration including story patterns, addons, and build settings
- **preview.ts**: Global decorators, parameters, and controls configuration

## Addons Included

- **@storybook/addon-docs**: Automatic documentation generation
- **@storybook/addon-controls**: Interactive controls for component props
- **@storybook/addon-actions**: Event action logging
- **@storybook/addon-viewport**: Responsive design testing
- **@storybook/addon-backgrounds**: Background color testing
- **@storybook/addon-measure**: Layout measurement tools
- **@storybook/addon-outline**: Component outline visualization

## Writing Stories

Stories should follow this pattern:
```typescript
import type { Meta, StoryObj } from '@storybook/html-vite';

const meta: Meta = {
  title: 'Components/YourComponent',
  // ... configuration
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  // ... story configuration
};
```

## Web Components Support

The configuration includes specific optimizations for Stencil web components:
- Proper handling of custom elements
- Optimized dependencies for `@stencil/core`
- Environment variable configuration for different build modes
- Automatic registration of Stencil components via loader imports

## Component-Specific Stories

### Button Package (`@comp-test/button`)
- **Button.stories.ts**: Comprehensive stories for the `ct-button` Stencil component
  - All variants (primary, secondary, danger, outline)
  - All sizes (small, medium, large)
  - All states (disabled, loading, full-width)
  - Real-world examples and showcase stories

### Input Package (`@comp-test/input`)
- **MyComponent.stories.ts**: Stories for the `my-component` Stencil component

## Adding New Components

To add stories for a new component:

1. Create a `.stories.ts` file in the component's package under `stories/` directory (preferred)
2. Import the necessary types from `@storybook/html-vite`
3. For Stencil components, create helper functions to instantiate the component
4. Define stories with proper controls and documentation

Example structure:
```
packages/
  your-package/
    stories/              # Preferred location for stories
      YourComponent.stories.ts
    src/
      your-component.tsx  # Single component file
    stencil.config.ts     # Package-specific config
    package.json          # @comp-test/your-package
```

## Building Components Before Storybook

Before running Storybook, make sure to build your components:

```bash
# Build all packages
npm run build

# Or build specific package
cd packages/button
npm run build
```

This generates the loader files needed for Stencil components to work in Storybook.
