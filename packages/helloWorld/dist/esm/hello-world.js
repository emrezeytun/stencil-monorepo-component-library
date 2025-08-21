import { p as promiseResolve, b as bootstrapLazy } from './index-CNNqbLXo.js';
export { s as setNonce } from './index-CNNqbLXo.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.36.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["hello-world",[[257,"hello-world"]]]], options);
});
//# sourceMappingURL=hello-world.js.map

//# sourceMappingURL=hello-world.js.map