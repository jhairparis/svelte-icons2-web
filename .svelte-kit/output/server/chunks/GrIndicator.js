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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7-3A7 7 0 0 0 5 8c0 1.933.5 3 2 5s3 3.5 3 6v4h4v-4c0-2.5 1.5-4 3-6s2-3.067 2-5Z"}"></path></svg>`;
});
export {
  Component as default
};
