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
  )}><path d="${"M17 5H7v2h10V5ZM7 9h2v2H7V9Zm2 4H7v2h2v-2Zm-2 4h2v2H7v-2Zm6-8h-2v2h2V9Zm-2 4h2v2h-2v-2Zm2 4h-2v2h2v-2Zm2-8h2v2h-2V9Zm2 4h-2v6h2v-6Z"}"></path><path fill-rule="${"evenodd"}" d="${"M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Zm2 0h14v18H5V3Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
