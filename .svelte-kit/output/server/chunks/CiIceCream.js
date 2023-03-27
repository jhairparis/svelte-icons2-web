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
  )}><path d="${"M16.54 5.94a4.594 4.594 0 0 0-9.08 0 3.065 3.065 0 0 0-.76 5.85l3.92 9.25a1.5 1.5 0 0 0 2.76 0l3.92-9.26a3.058 3.058 0 0 0-.76-5.84Zm-4.08 14.71a.5.5 0 0 1-.92 0l-3.65-8.62h8.22Zm3.64-9.62H7.9a2.06 2.06 0 1 1 .01-4.12.5.5 0 0 0 .5-.48 3.6 3.6 0 0 1 7.18 0 .506.506 0 0 0 .51.48 2.06 2.06 0 0 1 0 4.12Z"}" data-name="${"Ice Cream"}"></path></svg>`;
});
export {
  Component as default
};