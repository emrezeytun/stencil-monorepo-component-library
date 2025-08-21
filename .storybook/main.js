module.exports = {
  stories: [
    '../packages/helloWorld/stories/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
  },
  async viteFinal(config) {
    // Ensure proper handling of web components
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    // Add Stencil source watching
    config.server = config.server || {};
    config.server.watch = config.server.watch || {};
    config.server.watch.include = [
      'packages/*/src/**/*.tsx',
      'packages/*/src/**/*.ts',
      'packages/*/src/**/*.css',
      'packages/*/dist/**/*',
      'packages/*/loader/**/*'
    ];

    // Force reload on Stencil changes
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'packages/*/loader/**/*'
    ];

    return config;
  },
};
