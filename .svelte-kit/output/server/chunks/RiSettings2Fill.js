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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m8.686 4 2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}"></path></svg>`;
});
export {
  Component as default
};
