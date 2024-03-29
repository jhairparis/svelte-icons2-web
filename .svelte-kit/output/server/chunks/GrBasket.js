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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M2 12h20l-2 11H4L2 12Zm18-4-6-7M4 8l6-7M1 8h22v4H1V8Zm7 7v5m8-5v5m-4-5v5"}"></path></svg>`;
});
export {
  Component as default
};
