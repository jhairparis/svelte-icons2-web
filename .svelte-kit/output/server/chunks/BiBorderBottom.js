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
  )}><path d="${"M3 7h2v2H3zm0 4h2v2H3zm0 4h2v2H3zM3 3h2v2H3zm8 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2zm0 12h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-8 0h2v2H7zm4-4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2zm6 8H3v2h18v-2h-2z"}"></path></svg>`;
});
export {
  Component as default
};
