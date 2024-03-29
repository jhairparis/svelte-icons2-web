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
  )}><path fill-rule="${"evenodd"}" d="${"M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm3-1h14a1 1 0 0 1 1 1v3H4V8a1 1 0 0 1 1-1Zm-1 6v3a1 1 0 0 0 1 1h3v-4H4Zm6 4h9a1 1 0 0 0 1-1v-3H10v4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
