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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416-1.57a7 7 0 1 0-9.884-9.915"}"></path><path d="${"M21 10a3.5 3.5 0 0 0-7 0m-1.29 2.715A3.5 3.5 0 0 1 7 10m7 7c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10m0-7a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
