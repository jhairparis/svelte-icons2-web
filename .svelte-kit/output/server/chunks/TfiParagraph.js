import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16 1.026H4.992c-2.181 0-3.955 1.774-3.955 3.955s1.774 3.954 3.955 3.954H8V16h1V2.026h2.015V16h1V2.026H16v-1zm-8 6.91H4.992a2.957 2.957 0 0 1-2.955-2.954 2.958 2.958 0 0 1 2.955-2.955H8v5.909z"}"></path></svg>`;
});
export {
  Component as default
};