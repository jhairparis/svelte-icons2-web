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
  )}><path d="${"M5.334 6.666a5.335 5.335 0 0 0 0 10.668A5.333 5.333 0 0 0 10.666 12a5.333 5.333 0 0 0-5.332-5.334zm13.332 0A5.333 5.333 0 0 0 13.334 12 5.333 5.333 0 1 0 24 12a5.335 5.335 0 0 0-5.334-5.334Z"}"></path></svg>`;
});
export {
  Component as default
};