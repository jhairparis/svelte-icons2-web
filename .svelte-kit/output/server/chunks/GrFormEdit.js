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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"m11.996 8.336 3.497 3.498-3.497-3.498Zm5.54-.54a.994.994 0 0 1-.004 1.416l-7.451 7.451L6 17.83l1.166-4.08 7.451-7.452a.997.997 0 0 1 1.416-.005l1.504 1.504Z"}"></path></svg>`;
});
export {
  Component as default
};
