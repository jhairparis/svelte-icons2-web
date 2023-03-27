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
  )}><path d="${"M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.09 4.1 3.61 1.51 5.65 1.51c-2.59-.79-4.48-2.13-5.69-4.02s-1.81-4.3-1.81-7.24c0-1.39.2-2.7.6-3.95.4-1.25.94-2.34 1.63-3.27s1.48-1.75 2.37-2.44 1.86-1.22 2.89-1.59c-2.04 0-3.92.5-5.65 1.51S6.26 7.07 5.25 8.8s-1.51 3.6-1.51 5.64z"}"></path></svg>`;
});
export {
  Component as default
};