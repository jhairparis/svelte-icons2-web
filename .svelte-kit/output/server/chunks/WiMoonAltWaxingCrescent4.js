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
  )}><path d="${"M3.75 14.44c0-1.52.3-2.98.89-4.37s1.4-2.58 2.4-3.59 2.2-1.81 3.59-2.4 2.85-.89 4.37-.89 2.98.3 4.37.89 2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.58-1.4-3.59-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37zm11.6-10.05c1.05 1.27 1.91 2.75 2.57 4.44s.99 3.56.99 5.61c0 4.39-1.14 7.75-3.43 10.06 1.31-.06 2.55-.37 3.74-.92s2.2-1.28 3.05-2.18 1.53-1.95 2.04-3.16.75-2.48.75-3.81c0-1.78-.43-3.43-1.3-4.94s-2.04-2.73-3.53-3.65-3.11-1.39-4.88-1.45z"}"></path></svg>`;
});
export {
  Component as default
};