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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.854 5.166a.5.5 0 0 1-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 0 1-.708.707c-.302-.302-.991-.302-1.293 0zM8 13c-1.105 0-2-1.119-2-2.5S6.895 8 8 8s2 1.119 2 2.5S9.105 13 8 13zm3.854-7.834a.498.498 0 0 1-.708 0c-.302-.302-.991-.302-1.293 0a.5.5 0 0 1-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 0 1 0 .707z"}"></path></svg>`;
});
export {
  Component as default
};
