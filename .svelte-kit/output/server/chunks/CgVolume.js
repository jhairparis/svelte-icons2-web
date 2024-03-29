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
  )}><path d="${"M24 12a8 8 0 0 1-8 8v-2a6 6 0 0 0 0-12V4a8 8 0 0 1 8 8Z"}"></path><path d="${"M20 12a4 4 0 0 1-4 4v-2a2 2 0 1 0 0-4V8a4 4 0 0 1 4 4Z"}"></path><path fill-rule="${"evenodd"}" d="${"m9 16 6 4V4L9 8H5a4 4 0 1 0 0 8h4Zm-4-6h4l4-2.5v9L9 14H5a2 2 0 1 1 0-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
