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
  )}><path d="${"M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"}"></path><path d="${"M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"}"></path></svg>`;
});
export {
  Component as default
};