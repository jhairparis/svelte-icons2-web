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
  )}><path d="${"M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 6a2 2 0 1 0-4 0H8a4 4 0 0 1 8 0h-2Zm2-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
