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
  )}><path d="${"M12 0C8.688 0 6 2.688 6 6s2.688 6 6 6a6.001 6.001 0 0 1 5.176 9.04h1.68a7.492 7.492 0 0 0 .642-3.03A7.507 7.507 0 0 0 12 10.5c-2.484 0-4.5-2.016-4.5-4.5S9.516 1.5 12 1.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6zm0 3a3 3 0 0 0-2.922 2.922A3 3 0 0 0 12 9a3 3 0 0 0 0-6zm0 1.5A1.5 1.5 0 0 1 13.5 6v.002A1.5 1.5 0 1 1 12 4.5zM7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15h-9zm3 1.5h3v6h-3v-6zm-6 1.47V18a7.418 7.418 0 0 0 .644 3.039h1.684A5.94 5.94 0 0 1 6 18v-.03H4.5Z"}"></path></svg>`;
});
export {
  Component as default
};