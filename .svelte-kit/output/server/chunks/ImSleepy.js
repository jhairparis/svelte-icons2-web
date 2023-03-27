import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z"}"></path><path d="${"M10 10.5c0 1.381-.895 2.5-2 2.5s-2-1.119-2-2.5S6.895 8 8 8s2 1.119 2 2.5zM6.5 5.313a.502.502 0 0 1-.354-.146c-.302-.302-.991-.302-1.293 0a.5.5 0 0 1-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 0 1-.354.853zm5 0a.502.502 0 0 1-.354-.146c-.302-.302-.991-.302-1.293 0a.5.5 0 0 1-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 0 1-.354.853z"}"></path></svg>`;
});
export {
  Component as default
};