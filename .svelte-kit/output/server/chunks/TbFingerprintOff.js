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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3M8 11c0-.848.264-1.634.713-2.28m2.4-1.621A4 4 0 0 1 16 11l-.001 1M12 12v1a14 14 0 0 0 2.5 8M8 15a18 18 0 0 0 1.8 6m-4.9-2a22 22 0 0 1-.9-7v-1a8 8 0 0 1 1.854-5.143M8.03 4.032A8 8 0 0 1 16 4.05M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
