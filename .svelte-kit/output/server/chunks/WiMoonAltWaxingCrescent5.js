import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 30 30" },
      { viewBox: "0 0 30 30" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M3.74 14.44c0-1.52.3-2.98.89-4.37s1.4-2.58 2.4-3.59 2.2-1.81 3.59-2.4 2.84-.89 4.37-.89 2.98.3 4.37.89 2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.58-1.4-3.59-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37zM15.15 4.39c1.83 3.22 2.74 6.57 2.74 10.05 0 4.16-.88 7.51-2.65 10.06 1.34-.03 2.61-.32 3.82-.86s2.25-1.27 3.13-2.16 1.57-1.95 2.09-3.18.78-2.51.78-3.86c0-1.8-.44-3.46-1.33-5s-2.08-2.75-3.6-3.65-3.18-1.37-4.98-1.4z"}"></path></svg>`;
});
export {
  Component as default
};