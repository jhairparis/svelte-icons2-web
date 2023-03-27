import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#3F51B5"}" d="${"M39 43H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#80DEEA"}" d="${"m33.2 5-9.8 10.1L36 19.3 22.8 31.7l4.3 2.4L15 37l2.3-12.5 2.4 4.3 8-7.8L15 16.8 25.9 5h7.3z"}"></path></svg>`;
});
export {
  Component as default
};