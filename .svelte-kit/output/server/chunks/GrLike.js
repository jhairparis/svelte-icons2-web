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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 23h19c2 0 3-1 3-3V10h-7V4c0-2-1-3-3-3h-2s-.016 6-.016 7.326C10.984 9.652 10 11 8 11H1v12Zm5 0V11"}"></path></svg>`;
});
export {
  Component as default
};
