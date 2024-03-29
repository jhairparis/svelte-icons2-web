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
  )}><path fill-rule="${"evenodd"}" d="${"M18.364 5.636A9 9 0 1 1 5.636 18.364 9 9 0 0 1 18.364 5.636Zm-2.172 11.97L6.393 7.808a7.001 7.001 0 0 0 9.8 9.8ZM16.95 7.05a7.002 7.002 0 0 1 .657 9.142l-9.8-9.799a7.001 7.001 0 0 1 9.143.657Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
