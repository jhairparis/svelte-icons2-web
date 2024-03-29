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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M2.998 7V1H17.5L21 4.5V23h-6m1-22v5h5M8 23A7 7 0 1 0 8 9a7 7 0 0 0 0 14Zm-3.5-6.5L8 13l3.5 3.5m-3.5-3V20"}"></path></svg>`;
});
export {
  Component as default
};
