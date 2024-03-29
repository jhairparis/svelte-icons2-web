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
  )}><path d="${"M13 7h-2v10h2V7Zm-7 .757 1.414 1.415L5.586 11H10v2H5.586l1.828 1.828L6 16.243 1.757 12 6 7.757Zm12 8.486-1.414-1.414L18.414 13H14v-2h4.414l-1.828-1.828L18 7.757 22.243 12 18 16.243Z"}"></path></svg>`;
});
export {
  Component as default
};
