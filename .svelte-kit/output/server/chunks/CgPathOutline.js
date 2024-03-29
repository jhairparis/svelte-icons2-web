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
  )}><path fill-rule="${"evenodd"}" d="${"M5 5h10v4h4v10H9v-4H5V5Zm2 2h6v2H9v4H7V7Zm4 10h6v-6h-2v4h-4v2Zm2-6h-2v2h2v-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
