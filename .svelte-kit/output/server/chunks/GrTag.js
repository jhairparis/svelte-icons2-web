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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M11.706 22.294a.992.992 0 0 1-1.41.003l-8.593-8.594a1 1 0 0 1 .003-1.409L13 1h10v10L11.706 22.294ZM6 12l6 6M9 9l6 6m2-9a1 1 0 1 1 2 0 1 1 0 0 1-2 0"}"></path></svg>`;
});
export {
  Component as default
};
