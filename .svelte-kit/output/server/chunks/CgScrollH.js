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
  )}><path d="${"M7.182 9.172 5.768 7.757 1.525 12l4.243 4.243 1.414-1.415L4.353 12l2.829-2.828Zm9.636 5.656 1.414 1.415L22.475 12l-4.243-4.243-1.414 1.415L19.646 12l-2.828 2.828Z"}"></path><path fill-rule="${"evenodd"}" d="${"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
