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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M14 9v8-8Zm-4 0v8-8ZM8 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM4 23h16v-3H4v3Zm3-3h10v-3H7v3Z"}"></path></svg>`;
});
export {
  Component as default
};
