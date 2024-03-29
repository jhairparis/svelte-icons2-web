import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M11.5.5 8 3.5l4.5 3 3.5-3zM8 3.5 4.5.5 0 3.5l3.5 3zm4.5 3 3.5 3-4.5 2.5L8 9zM8 9 3.5 6.5 0 9.5 4.5 12z"}"></path><path d="${"M11.377 13.212 8 10.317l-3.377 2.895L2.5 12.033V13.5L8 16l5.5-2.5v-1.467z"}"></path></svg>`;
});
export {
  Component as default
};
