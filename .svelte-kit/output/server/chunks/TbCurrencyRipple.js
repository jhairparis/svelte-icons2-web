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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"7"}" cy="${"12"}" r="${"3"}"></circle><circle cx="${"17"}" cy="${"7"}" r="${"3"}"></circle><circle cx="${"17"}" cy="${"17"}" r="${"3"}"></circle><path d="${"M10 12h3l2-2.5m0 5L13 12"}"></path></svg>`;
});
export {
  Component as default
};