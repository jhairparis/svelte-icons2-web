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
  )}><path d="${"M11.8 14.43c0 2.39.24 4.52.71 6.39s1.31 3.5 2.51 4.89c1.52 0 2.98-.3 4.37-.89s2.59-1.4 3.6-2.4 1.81-2.2 2.4-3.6.89-2.85.89-4.39-.3-2.99-.89-4.38-1.4-2.58-2.4-3.59-2.2-1.81-3.6-2.4-2.85-.89-4.37-.89C14 4.63 13.21 6.33 12.65 8.3s-.85 4-.85 6.13z"}"></path></svg>`;
});
export {
  Component as default
};