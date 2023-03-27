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
  )}><path d="${"M3.74 14.44c0-1.52.3-2.98.89-4.37s1.4-2.58 2.4-3.59 2.2-1.81 3.59-2.4 2.84-.89 4.37-.89 2.98.3 4.37.89 2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.58-1.4-3.59-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37zM15.58 4.41c1.28 1.1 2.32 2.51 3.13 4.22s1.22 3.65 1.22 5.82c0 4.64-1.39 7.99-4.16 10.05 1.28-.1 2.49-.43 3.63-1s2.13-1.29 2.96-2.18 1.49-1.93 1.97-3.13.73-2.44.73-3.74c0-1.75-.42-3.38-1.26-4.89s-1.99-2.72-3.44-3.64-3.05-1.42-4.78-1.51z"}"></path></svg>`;
});
export {
  Component as default
};