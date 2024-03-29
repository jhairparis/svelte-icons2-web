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
  )}><path d="${"m14.75 7.784 1.414-1.415 4.242 4.243-4.242 4.243-1.415-1.415 2.829-2.828-2.829-2.828Z"}"></path><path d="${"m10.507 13.44 1.414 1.415 4.243-4.243L11.92 6.37l-1.414 1.415 1.847 1.846h-4.76a4 4 0 0 0-4 4v4h2v-4a2 2 0 0 1 2-2h4.723l-1.81 1.81Z"}"></path></svg>`;
});
export {
  Component as default
};
