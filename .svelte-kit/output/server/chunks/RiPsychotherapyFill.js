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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0 1 11 2zm0 5a1 1 0 0 0-1 1v.999L9 9a1 1 0 0 0 0 2l1-.001V12a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1V8a1 1 0 0 0-1-1z"}"></path></svg>`;
});
export {
  Component as default
};