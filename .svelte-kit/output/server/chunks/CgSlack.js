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
  )}><path fill-rule="${"evenodd"}" d="${"M13 10a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0v5ZM5 8a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4H5Zm10 5a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4h-5Zm-5 9a2 2 0 0 1-2-2v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2ZM8 5a2 2 0 1 1 4 0v2h-2a2 2 0 0 1-2-2ZM3 15a2 2 0 1 0 4 0v-2H5a2 2 0 0 0-2 2Zm14 5a2 2 0 1 1-4 0v-2h2a2 2 0 0 1 2 2Zm5-10a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
