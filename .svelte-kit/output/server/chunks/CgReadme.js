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
  )}><path fill-rule="${"evenodd"}" d="${"M4 5.5h5a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Zm10 14c-.35 0-.687-.06-1-.17v.17a1 1 0 1 1-2 0v-.17c-.313.11-.65.17-1 .17H4a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h5a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3.5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6Zm-1-12v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2Zm-8 0h4v2H5v-2Zm10 0h4v2h-4v-2Zm4 3h-4v2h4v-2Zm-14 0h4v2H5v-2Zm14 3h-4v2h4v-2Zm-14 0h4v2H5v-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
