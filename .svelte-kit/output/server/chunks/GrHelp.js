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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-5v-3c0-2 1-2 3-3s3-2.842 3-5A6 6 0 1 0 6 7"}"></path></svg>`;
});
export {
  Component as default
};
