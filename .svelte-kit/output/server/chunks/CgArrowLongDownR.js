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
  )}><path fill-rule="${"evenodd"}" d="${"M16.242 4.641 11.999.4 7.756 4.64 11 7.886l.013 11.9-1.845-1.834-1.41 1.418 4.255 4.231 4.23-4.254-1.417-1.41-1.813 1.822L13 7.883l3.242-3.242Zm-5.657 0 1.414-1.414 1.414 1.414L12 6.056 10.585 4.64Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};