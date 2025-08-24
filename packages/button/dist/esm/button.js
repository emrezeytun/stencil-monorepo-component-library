import { p as promiseResolve, b as bootstrapLazy } from './index-BcWdPQhT.js';
export { s as setNonce } from './index-BcWdPQhT.js';
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
  return bootstrapLazy([["comp-button",[[257,"comp-button",{"variant":[1],"size":[1],"disabled":[4],"type":[1]}]]]], options);
});
//# sourceMappingURL=button.js.map

//# sourceMappingURL=button.js.map