import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m71.1 67.17-4.28 38.43 379.28.7-3.8-39.13zm-6.28 56.43L24.04 423.5c55.85 22.4 114.06 20.6 173.86 1L234 282.6c12.1 9 25.5 5.3 32.2-1l39.9 146.1c61.9 24.1 132 19.5 181.9 6l-40.2-309.4z"}"></path></svg>`;
});
export {
  Component as default
};