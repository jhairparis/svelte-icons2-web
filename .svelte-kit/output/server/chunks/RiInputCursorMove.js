import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z"}"></path></svg>`;
});
export {
  Component as default
};
