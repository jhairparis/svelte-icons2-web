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
  )}><path d="${"M15.486 20h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v2h4v12h-4v2Z"}"></path><path d="${"m10.158 17.385-1.42-1.408 3.92-3.953H3.513a1 1 0 1 1 0-2h9.163l-3.98-3.947 1.408-1.42 6.391 6.337-6.337 6.391Z"}"></path></svg>`;
});
export {
  Component as default
};
