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
  )}><path fill-opacity="${".5"}" d="${"M18 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v2h3a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3v2h3Z"}"></path><path d="${"M13 3h-2v18h2V3ZM5 8a1 1 0 0 1 1-1h3V5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v-2H6a1 1 0 0 1-1-1V8Z"}"></path></svg>`;
});
export {
  Component as default
};
