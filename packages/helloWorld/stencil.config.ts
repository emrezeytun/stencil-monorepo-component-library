import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

const distTarget = {
  type: 'dist-custom-elements',
  dir: 'dist/components',
  customElementsExportBehavior: 'single-export-module'
};

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
    // React bindings için gerekli custom elements
    distTarget,

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
    browserHeadless: "shell",
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 3334,
    openBrowser: false
  },
};
