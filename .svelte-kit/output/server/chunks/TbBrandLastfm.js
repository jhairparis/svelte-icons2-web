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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 8c-.83-1-1.388-1-2-1-.612 0-2 .271-2 2s1.384 2.233 3 3c1.616.767 2.125 1.812 2 3s-1 2-3 2-3-1-3.5-2-1.585-4.78-2.497-5.997A5 5 0 1 0 11 16"}"></path></svg>`;
});
export {
  Component as default
};
