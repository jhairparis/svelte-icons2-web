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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16.69 7.44a6.973 6.973 0 0 0-1.63 3.635"}"></path><path d="${"M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583-1.449c.988-.788 1.93-1.836 2.82-3.153-3.005-4.443-6.596-5.812-10.564-4.548M8.672 8.72C6.527 9.986 4.294 11.935 2 14.506M18 11v.01m-6.847.159c-.287.777-.171 1.554.347 2.331M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
