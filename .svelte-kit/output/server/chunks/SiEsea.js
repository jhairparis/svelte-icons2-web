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
  )}><path d="${"M14.054 2.767 8.95 9.511 0 9.65l5.832 4.47L1.042 21l8.491-4.088 5.711 4.322V14.12L24 9.796l-17.255 4.02a12.575 12.575 0 0 0 1.589-1.955 5.475 5.475 0 0 0 .617-1.786l5.593-.15z"}"></path></svg>`;
});
export {
  Component as default
};