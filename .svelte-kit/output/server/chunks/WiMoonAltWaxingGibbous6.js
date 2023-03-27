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
  )}><path d="${"M3.74 14.44c0-1.53.3-3 .89-4.39s1.4-2.59 2.4-3.6 2.2-1.81 3.6-2.4 2.85-.89 4.37-.89c1.53 0 3 .3 4.39.89s2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.6.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.39.89c-1.52 0-2.98-.3-4.37-.89s-2.59-1.4-3.6-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37zm2.68 0c0 .78.05 1.5.15 2.15.1.65.29 1.35.57 2.09s.66 1.41 1.13 2.03 1.09 1.24 1.88 1.86 1.7 1.2 2.77 1.71c.67.15 1.37.22 2.09.22 1.37 0 2.67-.27 3.91-.8s2.31-1.25 3.22-2.15 1.62-1.97 2.15-3.22.8-2.55.8-3.9c0-1.82-.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68-3.23-1.35-5.05-1.35c-.85 0-1.62.09-2.31.26-.89.44-1.67.9-2.35 1.39S9.1 7.01 8.66 7.54s-.82 1.08-1.13 1.62-.54 1.12-.69 1.74-.26 1.2-.32 1.75-.1 1.15-.1 1.79z"}"></path></svg>`;
});
export {
  Component as default
};