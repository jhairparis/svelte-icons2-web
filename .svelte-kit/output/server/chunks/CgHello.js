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
  )}><path d="${"M17.5 12a5.485 5.485 0 0 1-1.725 4A5.481 5.481 0 0 1 12 17.5c-1.461 0-2.79-.57-3.775-1.5A5.485 5.485 0 0 1 6.5 12h11Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H1V7Zm2.75 5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
