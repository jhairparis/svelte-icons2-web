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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12.59 12.59C11.82 14.008 10.055 15 8 15c-2.761 0-5-1.79-5-4a8 8 0 0 0 13.643 5.67m1.64-2.357A7.97 7.97 0 0 0 19 11a3 3 0 0 0-5.545-1.59"}"></path><path d="${"M16 8c0-2 2-4 4-4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
