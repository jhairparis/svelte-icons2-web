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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 1h3v3H1V1Zm12 0h3v3h-3V1ZM4 2h9m2 7h5M4 15h9M1 13h3v3H1v-3Zm12 0h3v3h-3v-3ZM2 4v9m13-9v9m5-5h3v3h-3V8Zm-9 14h9M8 20h3v3H8v-3Zm12 0h3v3h-3v-3ZM9 16v4m13-9v9"}"></path></svg>`;
});
export {
  Component as default
};
