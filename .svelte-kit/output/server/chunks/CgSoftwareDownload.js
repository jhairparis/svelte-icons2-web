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
  )}><path d="${"M11 5a1 1 0 1 1 2 0v7.158l3.243-3.243 1.414 1.414L12 15.986 6.343 10.33l1.414-1.414L11 12.158V5Z"}"></path><path d="${"M4 14h2v4h12v-4h2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4Z"}"></path></svg>`;
});
export {
  Component as default
};
