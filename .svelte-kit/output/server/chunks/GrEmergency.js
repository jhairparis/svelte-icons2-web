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
  )}><path fill-rule="${"evenodd"}" d="${"M10 7.172V2h4v5.172l3.657-3.657 2.828 2.828L16.828 10H22v4h-5.172l3.657 3.657-2.828 2.828L14 16.828V22h-4v-5.172l-3.657 3.657-2.828-2.828L7.172 14H2v-4h5.172L3.515 6.343l2.828-2.828L10 7.172Z"}"></path></svg>`;
});
export {
  Component as default
};
