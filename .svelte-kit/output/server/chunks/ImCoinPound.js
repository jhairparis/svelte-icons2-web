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
  )}><path d="${"M7.5 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 13.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"}"></path><path d="${"M9.5 11H6V9h1.5a.5.5 0 0 0 0-1H6v-.5a1.502 1.502 0 0 1 2.8-.75.499.499 0 1 0 .865-.501A2.51 2.51 0 0 0 7.5 4.999a2.503 2.503 0 0 0-2.5 2.5v.5h-.5a.5.5 0 0 0 0 1H5v3h4.5a.5.5 0 0 0 0-1z"}"></path></svg>`;
});
export {
  Component as default
};