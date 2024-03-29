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
  )}><path d="${"M4 9a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z"}"></path><path fill-rule="${"evenodd"}" d="${"M4 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H4Zm16 2H4a2 2 0 0 0-2 2v7h20V7a2 2 0 0 0-2-2Zm2 11H2v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
