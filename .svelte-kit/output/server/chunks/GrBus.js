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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M3 12h18v8H3v-8Zm0-8c0-1.105.893-2 1.995-2h14.01C20.107 2 21 2.887 21 4v8H3V4Zm0 16h3v2.001a.996.996 0 0 1-.999.999H3.999A.996.996 0 0 1 3 22.001V20Zm15 0h3v2.001a.996.996 0 0 1-.999.999h-1.002a.996.996 0 0 1-.999-.999V20ZM7 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 6v6M1 5v8m22-8v8m-13 3h4M3 6h18"}"></path></svg>`;
});
export {
  Component as default
};
