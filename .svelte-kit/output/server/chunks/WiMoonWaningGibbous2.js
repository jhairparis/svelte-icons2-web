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
  )}><path d="${"M3.74 14.49c0 1.22.19 2.4.56 3.54s.91 2.17 1.6 3.09 1.5 1.72 2.42 2.42 1.95 1.23 3.09 1.6 2.32.56 3.54.56c4.33-1.73 6.49-5.47 6.49-11.22 0-1.39-.18-2.7-.54-3.93s-.85-2.31-1.47-3.23-1.31-1.71-2.06-2.39-1.56-1.23-2.42-1.66c-2.03 0-3.91.5-5.63 1.5S6.25 7.14 5.24 8.86s-1.5 3.6-1.5 5.63z"}"></path></svg>`;
});
export {
  Component as default
};