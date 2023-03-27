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
  )}><path d="${"M8 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1.23 4.49H6.77A1.77 1.77 0 0 0 5 7.26V9.9A1.06 1.06 0 0 0 6 11v2.33a1.2 1.2 0 0 0 1.2 1.2h1.6a1.2 1.2 0 0 0 1.2-1.24V11a1.06 1.06 0 0 0 1-1.1V7.26a1.77 1.77 0 0 0-1.77-1.77zM6 10V7.26a.76.76 0 0 1 .77-.77h2.46a.76.76 0 0 1 .77.77V10H9v3.31a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V10H6z"}"></path></svg>`;
});
export {
  Component as default
};