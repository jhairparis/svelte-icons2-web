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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172 2.172 5l1.414 1.414a2 2 0 0 0 2.828 0zm11.172 11.172a2 2 0 0 0 0 2.828L19 21.828 21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0zM6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5zm-15.5 10 5 5m1-11 5 5"}"></path></svg>`;
});
export {
  Component as default
};
