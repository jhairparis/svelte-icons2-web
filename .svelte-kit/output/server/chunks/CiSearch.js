import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 24 24" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.904 7.904 0 0 0 2.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96c0 4.39 3.57 7.96 7.96 7.96 1.98 0 3.81-.73 5.21-1.94l3.75 3.75zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96 3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96z"}"></path></svg>`;
});
export {
  Component as default
};
