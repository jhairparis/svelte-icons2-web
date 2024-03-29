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
  )}><path fill-rule="${"evenodd"}" d="${"m2 6.77 12.33-3.43.67.53v8.6l-.67.53-6.089-1.595a2.16 2.16 0 1 1-4.178-1.095L2 9.77l-.42-.53V7.3L2 6.77zm3.006 3.787a1.13 1.13 0 0 0-.04.242 1.17 1.17 0 0 0 2.288.347l-2.248-.589zM2.58 8.82 14 11.83V4.5L2.58 7.72v1.1z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
