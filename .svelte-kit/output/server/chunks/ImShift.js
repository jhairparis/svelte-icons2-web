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
  )}><path d="${"M10.5 14h-5a.5.5 0 0 1-.5-.5V8H3a.5.5 0 0 1-.354-.854l5-5a.5.5 0 0 1 .707 0l5 5a.499.499 0 0 1-.354.854h-2v5.5a.5.5 0 0 1-.5.5zM6 13h4V7.5a.5.5 0 0 1 .5-.5h1.293L8 3.207 4.207 7H5.5a.5.5 0 0 1 .5.5V13z"}"></path></svg>`;
});
export {
  Component as default
};
