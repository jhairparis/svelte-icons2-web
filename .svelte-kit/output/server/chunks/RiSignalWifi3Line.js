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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 7c-1.898 0-3.683.48-5.241 1.327l5.24 6.49 5.242-6.49A10.938 10.938 0 0 0 12 10zm0-5c-3.028 0-5.923.842-8.42 2.392l1.904 2.357C7.4 8.637 9.625 8 12 8s4.6.637 6.516 1.749L20.42 7.39A15.928 15.928 0 0 0 12 5z"}"></path></svg>`;
});
export {
  Component as default
};
