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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M9.536 13H7.329a3 3 0 1 1 .001-2h2.206L13 5h3.17a3 3 0 1 1 .001 2h-2.017l-2.886 4.999L14.155 17h2.016a3 3 0 1 1 0 2H13l-3.464-6zM19 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM19 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
