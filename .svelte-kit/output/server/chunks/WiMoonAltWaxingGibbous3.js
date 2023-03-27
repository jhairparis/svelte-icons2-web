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
  )}><path d="${"M3.74 14.44c0-2.03.5-3.91 1.51-5.64s2.37-3.1 4.1-4.1 3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.59-1.4-3.59-2.4-1.8-2.2-2.4-3.6-.89-2.84-.89-4.37zm6.8 0c0 4.44 1.17 7.78 3.5 10.02.07 0 .17 0 .3.01s.25.02.35.02.2.01.3.01c1.36 0 2.66-.27 3.9-.8s2.32-1.25 3.22-2.15 1.61-1.97 2.15-3.21.8-2.54.8-3.91c0-1.36-.27-2.66-.8-3.9s-1.25-2.31-2.15-3.21-1.97-1.61-3.22-2.15-2.55-.8-3.9-.8c-.36 0-.63.01-.81.03-1.08 1.22-1.96 2.69-2.64 4.42s-1 3.61-1 5.62z"}"></path></svg>`;
});
export {
  Component as default
};