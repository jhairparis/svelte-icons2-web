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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83A3.987 3.987 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.104.447-2.103 1.17-2.827"}"></path><path d="${"M11.062 7.062c.31-.041.622-.062.938-.062 1.956 0 3.724.802 4.994 2.095A142.85 142.85 0 0 0 15 11m-3.723.288a3 3 0 0 0-1.315.71L7.006 9.095a6.977 6.977 0 0 1 1.142-.942M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
