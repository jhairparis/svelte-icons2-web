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
  )}><path d="${"M9.25 7.784 7.836 6.369l-4.242 4.243 4.242 4.243L9.25 13.44l-2.828-2.828L9.25 7.784Z"}"></path><path d="${"m13.493 13.44-1.414 1.415-4.243-4.243L12.08 6.37l1.414 1.415-1.847 1.846h4.76a4 4 0 0 1 4 4v4h-2v-4a2 2 0 0 0-2-2h-4.723l1.81 1.81Z"}"></path></svg>`;
});
export {
  Component as default
};
