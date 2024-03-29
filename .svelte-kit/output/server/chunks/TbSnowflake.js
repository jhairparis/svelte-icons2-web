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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m10 4 2 1 2-1m-2-2v6.5l3 1.72m2.928-3.952.134 2.232 1.866 1.232M20.66 7l-5.629 3.25.01 3.458m4.887.56L18.062 15.5l-.134 2.232M20.66 17l-5.629-3.25-2.99 1.738M14 20l-2-1-2 1m2 2v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232M3.34 17l5.629-3.25-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232M3.34 7l5.629 3.25 2.99-1.738"}"></path></svg>`;
});
export {
  Component as default
};
