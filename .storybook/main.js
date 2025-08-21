module.exports = {
  stories: [
    '../packages/helloWorld/stories/**/*.stories.js',
  ],
  addons: [],
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

    // Add Stencil source watching for HMR
    config.server = config.server || {};
    config.server.watch = config.server.watch || {};
    config.server.watch.include = [
      'packages/*/src/**/*.tsx',
      'packages/*/src/**/*.ts', 
      'packages/*/src/**/*.css',
      'packages/*/dist/**/*',
      'packages/*/loader/**/*',
    ];

    // Force page reload on file changes
    config.server.watch.options = {
      ignored: ['**/node_modules/**', '**/.git/**'],
      persistent: true,
      ignoreInitial: true,
    };

    // Configure HMR for Stencil components
    config.server.hmr = {
      overlay: true,
      port: 6011, // Farklı port kullan
    };

    return config;
  },
};
