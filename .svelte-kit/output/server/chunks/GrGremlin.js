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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 2c.5 0 1-.321 1-1 0-.113-2-.075-2 0 0 .679.5 1 1 1Zm-9 8s.003-8 0-12c.003-4-.447-8 9-8s8.997 4 9 8c-.003 4 0 12 0 12m-.932-17c3.26 0 3.58-3.58 2.046-5.114C20.58.352 17 .673 17 3.932M7 19c0-.203 2.5 1.152 5 1 2.5.152 5-1.499 5-1 0 .802-1.5 2-5 2s-5-1.493-5-2ZM3.945 7C.605 7 .38 3.42 1.908 1.886 3.435.352 7 .673 7 3.932"}"></path></svg>`;
});
export {
  Component as default
};