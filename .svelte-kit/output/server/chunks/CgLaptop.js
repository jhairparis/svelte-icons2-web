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
  )}><path fill-rule="${"evenodd"}" d="${"M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm2 0h14v8H5V6Z"}" clip-rule="${"evenodd"}"></path><path d="${"M2 18a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z"}"></path></svg>`;
});
export {
  Component as default
};
