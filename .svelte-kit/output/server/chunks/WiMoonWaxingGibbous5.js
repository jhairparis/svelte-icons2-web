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
  )}><path d="${"M9.65 14.43c0 1.24.08 2.38.25 3.41s.44 2.05.83 3.04.95 1.89 1.67 2.71 1.6 1.52 2.62 2.12c1.52 0 2.98-.3 4.37-.89s2.59-1.4 3.6-2.4 1.81-2.2 2.4-3.6.89-2.85.89-4.39-.3-2.99-.89-4.38-1.4-2.58-2.4-3.59-2.2-1.81-3.6-2.4-2.85-.89-4.37-.89c-1.67 1.14-2.98 2.72-3.94 4.74s-1.43 4.18-1.43 6.52z"}"></path></svg>`;
});
export {
  Component as default
};