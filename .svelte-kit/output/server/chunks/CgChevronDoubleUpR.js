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
  )}><path d="${"m14.828 12.481 1.415-1.414L12 6.824l-4.243 4.243 1.415 1.414L12 9.653l2.828 2.828Z"}"></path><path d="${"m14.828 16.724 1.415-1.414L12 11.067 7.757 15.31l1.415 1.414L12 13.895l2.828 2.829Z"}"></path><path fill-rule="${"evenodd"}" d="${"M23 4.774a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14Zm-4-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
