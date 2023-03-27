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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"3"}" y="${"5"}" rx="${"2"}"></rect><path d="${"m3 17 4-3h10l4 3"}"></path><circle cx="${"7.5"}" cy="${"9.5"}" r="${".5"}" fill="${"currentColor"}"></circle><circle cx="${"16.5"}" cy="${"9.5"}" r="${".5"}" fill="${"currentColor"}"></circle></svg>`;
});
export {
  Component as default
};