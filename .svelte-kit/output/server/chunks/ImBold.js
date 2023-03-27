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
  )}><path d="${"M11.061 7.573A3.982 3.982 0 0 0 12 5c0-2.206-1.794-4-4-4H3v14h6c2.206 0 4-1.794 4-4a4.002 4.002 0 0 0-1.939-3.427zM6 3h1.586c.874 0 1.586.897 1.586 2s-.711 2-1.586 2H6V3zm2.484 10H6V9h2.484c.913 0 1.656.897 1.656 2s-.743 2-1.656 2z"}"></path></svg>`;
});
export {
  Component as default
};