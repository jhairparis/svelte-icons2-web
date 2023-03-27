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
  )}><path d="${"m7.694 12.705-5.056-4.84 4.84-5.057L8.923 4.19 6.566 6.653 12.6 6.49a4.8 4.8 0 0 1 4.927 4.669l.16 5.926 2.246-2.294 1.43 1.4-4.9 5-5-4.898 1.4-1.429 2.427 2.378-.162-6.018a2.4 2.4 0 0 0-2.463-2.335l-5.898.158 2.31 2.212-1.383 1.445Z"}"></path></svg>`;
});
export {
  Component as default
};