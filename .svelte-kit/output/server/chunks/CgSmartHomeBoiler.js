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
  )}><path fill-rule="${"evenodd"}" d="${"M5 5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v16h-3.856l.742 2h-2l-.742-2h-2l.742 2h-2l-.742-2H5V5Zm4-2h6a2 2 0 0 1 2 2v2H7V5a2 2 0 0 1 2-2ZM7 9h10v10H7V9Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
