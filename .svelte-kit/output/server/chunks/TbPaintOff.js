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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4M9 9H7a2 2 0 0 1-2-2V5"}"></path><path d="${"M19 6h1a2 2 0 0 1 2 2 5 5 0 0 1-5 5m-4 0h-1v2"}"></path><rect x="${"10"}" y="${"15"}" rx="${"1"}"></rect><path d="${"m3 3 18 18"}"></path></svg>`;
});
export {
  Component as default
};