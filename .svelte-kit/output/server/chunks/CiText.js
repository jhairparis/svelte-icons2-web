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
  )}><path d="${"M18.44 2.06H5.56a1.5 1.5 0 0 0-1.5 1.5v4.5a.5.5 0 0 0 1 0v-1H10v13.88H8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-2V7.06h4.94v1a.5.5 0 0 0 1 0v-4.5a1.5 1.5 0 0 0-1.5-1.5Zm.5 4H14a1 1 0 0 0-1 1v13.88h-2V7.06a1 1 0 0 0-1-1H5.06v-2.5a.5.5 0 0 1 .5-.5h12.88a.5.5 0 0 1 .5.5Z"}"></path></svg>`;
});
export {
  Component as default
};