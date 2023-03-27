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
  )}><path d="${"M1.5 0A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 22.5 0h-21zm6.75 6.75h5.271a3.843 3.843 0 0 1 .627 7.635v2.865H8.25V6.75zm1.5 1.5v7.5h2.898v-2.814h.873a2.343 2.343 0 1 0 0-4.686H9.75Z"}"></path></svg>`;
});
export {
  Component as default
};