import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M22 7H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm0 2v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h20zm-11 5v-2.5L6.5 16H17v-2h-6z"}"></path></svg>`;
});
export {
  Component as default
};