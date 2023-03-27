import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10.495 6.505 12.5 4.5a4.95 4.95 0 0 1 7 7l-1.998 1.998m-2 2L11.5 19.5a4.95 4.95 0 0 1-7-7l4-4m0 0 7 7M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};