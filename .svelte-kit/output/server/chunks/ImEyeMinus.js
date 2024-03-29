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
  )}><path d="${"M10 2h6v2h-6V2z"}"></path><path d="${"M13.599 5H9V3.056A8.923 8.923 0 0 0 8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5a9.173 9.173 0 0 0-2.401-3zM6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5zm5.444 5.348a7.326 7.326 0 0 1-7.889 0A7.626 7.626 0 0 1 1.72 8a7.594 7.594 0 0 1 2.52-2.462 4 4 0 1 0 7.518 0A7.615 7.615 0 0 1 14.278 8a7.594 7.594 0 0 1-2.335 2.348z"}"></path></svg>`;
});
export {
  Component as default
};
