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
  )}><path d="${"M5.375 2.65a2.64 2.64 0 0 1-2.62 2.65 2.64 2.64 0 0 1-2.63-2.65A2.64 2.64 0 0 1 2.755 0a2.64 2.64 0 0 1 2.62 2.65zm0 9.35a2.64 2.64 0 0 1-2.62 2.65A2.64 2.64 0 0 1 .125 12a2.64 2.64 0 0 1 2.63-2.65A2.64 2.64 0 0 1 5.375 12zm0 9.35A2.64 2.64 0 0 1 2.755 24a2.64 2.64 0 0 1-2.63-2.65 2.64 2.64 0 0 1 2.63-2.65 2.64 2.64 0 0 1 2.62 2.65zM11.315 0a2.64 2.64 0 0 0-2.61 2.65 2.64 2.64 0 0 0 2.6 2.65h9.94a2.64 2.64 0 0 0 2.63-2.65A2.64 2.64 0 0 0 21.255 0zm-2.61 12a2.64 2.64 0 0 1 2.62-2.65h5.68a2.64 2.64 0 0 1 2.6 2.65 2.64 2.64 0 0 1-2.6 2.65h-5.7a2.64 2.64 0 0 1-2.6-2.65z"}"></path></svg>`;
});
export {
  Component as default
};