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
  )}><path fill-rule="${"evenodd"}" d="${"m12 14 4 7H8l4-7Zm0-4L8 3h8l-4 7ZM2 18H0V6h2a6 6 0 1 1 0 12Zm20 0a6 6 0 1 1 0-12h2v12h-2Z"}"></path></svg>`;
});
export {
  Component as default
};
