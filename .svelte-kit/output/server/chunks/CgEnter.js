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
  )}><path d="${"M20 5H8v4H6V3h16v18H6v-6h2v4h12V5Z"}"></path><path d="${"m13.074 16.95-1.414-1.414L14.196 13H2v-2h12.196L11.66 8.465l1.414-1.415 4.95 4.95-4.95 4.95Z"}"></path></svg>`;
});
export {
  Component as default
};
