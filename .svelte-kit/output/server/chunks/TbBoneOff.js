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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m12.5 8.502.38-.38A3 3 0 1 1 18 6a3 3 0 1 1-2.12 5.122l-.372.372M13.5 13.502l-2.378 2.378a3 3 0 1 1-5.117 2.297L6 18l-.176-.005a3 3 0 1 1 2.298-5.115l2.378-2.378M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
