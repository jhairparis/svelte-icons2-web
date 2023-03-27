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
  )}><path d="${"M24 14.475a7.395 7.395 0 0 1-7.38 7.41h-.016a7.3 7.3 0 0 1-4.5-1.605A7.498 7.498 0 0 1 0 14.475V2.82h1.41v11.655a6 6 0 0 0 9.585 4.815 7.383 7.383 0 0 1-1.815-4.814v-9.54a2.82 2.82 0 0 1 5.64 0v9.54a7.365 7.365 0 0 1-1.77 4.814 5.997 5.997 0 0 0 8.383-1.304 6.013 6.013 0 0 0 1.157-3.511V2.82H24v11.655zm-10.59-9.54a1.41 1.41 0 0 0-2.82 0v9.54A5.998 5.998 0 0 0 12 18.33a6.004 6.004 0 0 0 1.41-3.855v-9.54z"}"></path></svg>`;
});
export {
  Component as default
};