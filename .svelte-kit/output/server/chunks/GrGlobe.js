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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M2 8s3.5 1 5 2 .564 2.42 1 3c.436.58 2-1 2 2s3 1 3 4 2.5 2.5 3 1 2.233-3.134 2-5c-.233-1.866-1-3-3-3s-3.5-.5-4-2 3-2 2-5 0-4 0-4m10 11c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z"}"></path></svg>`;
});
export {
  Component as default
};
