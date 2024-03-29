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
  )}><path fill-rule="${"evenodd"}" d="${"m12.189 7 .002-2 7 .007-.008 7-2-.002.004-3.588-3.044 3.044a5.002 5.002 0 0 1-7.679 6.336 5 5 0 0 1 6.25-7.736l3.058-3.057L12.189 7Zm-4.31 5.14a3 3 0 1 1 4.242 4.244A3 3 0 0 1 7.88 12.14Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
