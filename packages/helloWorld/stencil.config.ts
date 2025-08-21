import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'hello-world',
  taskQueue: 'async',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
      footer: 'Built with ❤️ using Stencil'
    },
    {
      type: 'www',
      serviceWorker: null,
    }
  ],
  testing: {
    browserHeadless: true,
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 3334,
    openBrowser: false
  },
};
