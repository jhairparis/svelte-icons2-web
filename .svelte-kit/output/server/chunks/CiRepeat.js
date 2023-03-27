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
  )}><path d="${"M2.208 17.79a.5.5 0 0 1 0-.71l2-2a.511.511 0 0 1 .7 0 .5.5 0 0 1 0 .71l-1.15 1.15h15.19a2.272 2.272 0 0 0 1.26-.22c.89-.55.73-1.63.73-2.52V12a.5.5 0 0 1 1 0v2.76c0 1.17-.18 2.341-1.36 2.9a8.929 8.929 0 0 1-3.26.28H3.768l1.14 1.14a.5.5 0 0 1 0 .71.492.492 0 0 1-.7 0ZM21.792 6.21a.5.5 0 0 1 0 .71l-2 2a.511.511 0 0 1-.7 0 .5.5 0 0 1 0-.71l1.15-1.15H5.052a2.272 2.272 0 0 0-1.26.22c-.89.55-.73 1.63-.73 2.52V12a.5.5 0 0 1-1 0V9.24c0-1.17.18-2.341 1.36-2.9a8.929 8.929 0 0 1 3.26-.28h13.55l-1.14-1.14a.5.5 0 0 1 0-.71.492.492 0 0 1 .7 0Z"}"></path></svg>`;
});
export {
  Component as default
};