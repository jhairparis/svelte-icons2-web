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
  )}><path fill-rule="${"evenodd"}" d="${"M13 21v-8h8v8h-8Zm2-6h4v4h-4v-4ZM3 11V3h8v8H3Zm2-6h4v4H5V5Z"}" clip-rule="${"evenodd"}"></path><path d="${"M18 6v6h-2V8h-4V6h6Zm-6 12H6v-6h2v4h4v2Z"}"></path></svg>`;
});
export {
  Component as default
};
