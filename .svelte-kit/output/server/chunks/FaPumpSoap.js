import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 384 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M235.63 160H84.37a64 64 0 0 0-63.74 58.21l-20.36 224A64 64 0 0 0 64 512h192a64 64 0 0 0 63.74-69.79l-20.36-224A64 64 0 0 0 235.63 160ZM160 416c-33.12 0-60-26.33-60-58.75 0-25 35.7-75.47 52-97.27a10 10 0 0 1 16 .02c16.33 21.8 52 72.27 52 97.27 0 32.4-26.88 58.73-60 58.73ZM379.31 94.06 336 50.74A64 64 0 0 0 290.75 32H224a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128V96h66.75l43.31 43.31a16 16 0 0 0 22.63 0l22.62-22.62a16 16 0 0 0 0-22.63Z"}"></path></svg>`;
});
export {
  Component as default
};