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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M9.41 6.58 12 4l8 8-2.58 2.59L18.83 16l2.58-2.59c.78-.78.78-2.05 0-2.83l-8-8c-.78-.78-2.05-.78-2.83 0L8 5.17l1.41 1.41zm-6.6-3.77L1.39 4.22 5.17 8l-2.58 2.59c-.78.78-.78 2.05 0 2.83l8 8c.78.78 2.05.78 2.83 0L16 18.83l3.78 3.78 1.41-1.41L2.81 2.81zM12 20l-8-8 2.58-2.59L8.17 11H7v2h3.17l1.5 1.5-1.08 1.09L12 17l1.09-1.09 1.5 1.5L12 20z"}"></path><path d="${"m10.916 8.087 1.09-1.089 4.999 5-1.09 1.088z"}"></path></svg>`;
});
export {
  Component as default
};
