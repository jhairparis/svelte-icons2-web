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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 5c0-2 1-4 2-4l2 4h2l2-4c1 0 2 2 2 4 0 2.254-1 4-3 5v11c0 1 0 2-2 2s-2-1-2-2V10C2 9 1 7.254 1 5Zm18 7v6m-2 0 1 5h2l1-5h-4Zm-3-6h10-10Zm7 0V3a2 2 0 1 0-4 0v9"}"></path></svg>`;
});
export {
  Component as default
};
