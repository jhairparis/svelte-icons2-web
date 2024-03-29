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
  )}><path fill="${"none"}" stroke="${"#231F20"}" stroke-width="${"2"}" d="${"m17 18-5-3 5 3ZM7 18l5-3v-4m5 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM17 6a5 5 0 1 1-10.001-.001A5 5 0 0 1 17 6Z"}"></path></svg>`;
});
export {
  Component as default
};
