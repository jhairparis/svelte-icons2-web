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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m22.27 21.73-3.54-3.55L5.78 5.23 2.27 1.72 1 2.99 3.01 5H3v6c0 5.55 3.84 10.74 9 12 2.16-.53 4.08-1.76 5.6-3.41L21 23l1.27-1.27zM13 9.92l6.67 6.67C20.51 14.87 21 12.96 21 11V5l-9-4-5.48 2.44L11 7.92l2 2z"}"></path></svg>`;
});
export {
  Component as default
};
