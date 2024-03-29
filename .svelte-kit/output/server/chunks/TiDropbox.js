import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m3 12.9 5.3 3.5 3.7-3.1L6.7 10zm5.3-9.3L3 7.1 6.7 10 12 6.7zM21 7.1l-5.3-3.5L12 6.7l5.3 3.3zm-9 6.2 3.7 3.1 5.3-3.5-3.7-2.9zm0 1.2-3.7 3.1-1.6-1.1v1.2l5.3 3.2 5.3-3.2v-1.2l-1.6 1.1z"}"></path></svg>`;
});
export {
  Component as default
};
