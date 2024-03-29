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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M16.5 18 12 22.5 7.5 18H1V1h22v17h-6.5ZM6 10h1V9H6v1Zm5.5 0h1V9h-1v1Zm5.5 0h1V9h-1v1Z"}"></path></svg>`;
});
export {
  Component as default
};
