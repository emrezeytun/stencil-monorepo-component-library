import type { StorybookConfig } from '@storybook/html-vite';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../packages/button/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/input/src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../packages/*/src/**/*.mdx',
    '../packages/*/stories/**/*.mdx',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-viewport'),
    getAbsolutePath('@storybook/addon-backgrounds'),
    getAbsolutePath('@storybook/addon-measure'),
    getAbsolutePath('@storybook/addon-outline'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/html-vite'),
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config, { configType }) => {
    // Ensure proper handling of web components
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify(configType.toLowerCase()),
    };

    // Add support for Stencil components
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['@stencil/core'],
    };

    // Add Stencil component loaders
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
      },
    };

    return config;
  },
};

export default config;
