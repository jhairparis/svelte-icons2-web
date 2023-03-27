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
  )}><path d="${"M12 0C5 0 0 5.65 0 12.08 0 18.83 5 24 12 24s12-5.17 12-11.92C24 5.65 19 0 12 0M8.47 3.44h3.5V6.7h3.58v2.86h-3.58v5.22c0 1.58.77 2.27 1.93 2.27.42 0 .98-.12 1.51-.32.38 1 1.05 1.9 1.77 2.62a7 7 0 0 1-3.52.97c-3.12 0-5.19-1.65-5.19-5.28V3.45Z"}"></path></svg>`;
});
export {
  Component as default
};