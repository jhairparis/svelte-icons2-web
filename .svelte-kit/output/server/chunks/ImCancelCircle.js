import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"}"></path><path d="${"M10.5 4 8 6.5 5.5 4 4 5.5 6.5 8 4 10.5 5.5 12 8 9.5l2.5 2.5 1.5-1.5L9.5 8 12 5.5z"}"></path></svg>`;
});
export {
  Component as default
};