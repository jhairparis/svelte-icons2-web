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
  )}><path d="${"m8 18 5.241 6H5.586L.345 18l5.241-6L.345 6l5.241-6h7.655L8 6l5.241 6L8 18zM23.655 0H13.241l5.241 6 5.173-6zM13.241 24h10.414l-5.172-6-5.242 6z"}"></path></svg>`;
});
export {
  Component as default
};
