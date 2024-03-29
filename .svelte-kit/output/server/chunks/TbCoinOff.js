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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14.8 9A2 2 0 0 0 13 8h-1M9.18 9.171A2 2 0 0 0 11 12h1m2.824 2.822A2 2 0 0 1 13 16h-2a2 2 0 0 1-1.8-1"}"></path><path d="${"M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73M12 6v2m0 8v2M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
