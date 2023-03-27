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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 13a3 3 0 0 1 2.08 5.162L12.17 20H15v2H9v-1.724l3.693-3.555A1 1 0 1 0 11 16H9a3 3 0 0 1 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12a7.985 7.985 0 0 0 3 6.246v2.416A9.995 9.995 0 0 1 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012A8.001 8.001 0 0 0 5.385 7.5H8v2H2v-6h2V6a9.98 9.98 0 0 1 8-4z"}"></path></svg>`;
});
export {
  Component as default
};