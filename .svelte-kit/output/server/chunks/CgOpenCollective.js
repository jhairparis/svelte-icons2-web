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
  )}><path fill-opacity="${".5"}" d="${"m16.682 15.753 2.13 2.13A8.965 8.965 0 0 0 21 12a8.964 8.964 0 0 0-2.123-5.806l-2.133 2.133A5.974 5.974 0 0 1 18 12c0 1.42-.493 2.725-1.318 3.753Z"}"></path><path d="${"M15.673 16.744a6 6 0 1 1 .08-9.426l2.13-2.13a9 9 0 1 0-.077 13.689l-2.133-2.133Z"}"></path></svg>`;
});
export {
  Component as default
};
