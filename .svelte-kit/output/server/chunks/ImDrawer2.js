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
  )}><path d="${"m15.89 10.188-4-5A.5.5 0 0 0 11.5 5h-7a.497.497 0 0 0-.39.188l-4 5A.5.5 0 0 0 0 10.5V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5a.497.497 0 0 0-.11-.312zM15 11h-3.5l-2 2h-3l-2-2H1v-.325L4.74 6h6.519l3.74 4.675V11z"}"></path></svg>`;
});
export {
  Component as default
};
