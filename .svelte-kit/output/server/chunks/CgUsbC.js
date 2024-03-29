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
  )}><path d="${"M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 12a5 5 0 0 1 5-5h8a5 5 0 0 1 0 10H8a5 5 0 0 1-5-5Zm5-3h8a3 3 0 1 1 0 6H8a3 3 0 1 1 0-6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
