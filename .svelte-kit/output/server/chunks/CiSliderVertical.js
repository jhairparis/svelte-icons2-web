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
  )}><path d="${"M8.5 5.13V2.55a.5.5 0 0 0-.5-.5.508.508 0 0 0-.5.5v2.58A2 2 0 0 0 6 7.06v1a2 2 0 0 0 1.5 1.93v11.46a.5.5 0 0 0 1 0V9.99A2 2 0 0 0 10 8.06v-1a2 2 0 0 0-1.5-1.93ZM9 8.06a1 1 0 1 1-2 0v-1a1.006 1.006 0 0 1 .98-1H8a1 1 0 0 1 1 1Zm7.5 5.95V2.55a.5.5 0 0 0-1 0v11.46a2 2 0 0 0-1.5 1.93v1a2 2 0 0 0 1.5 1.93v2.58a.5.5 0 0 0 .5.5.508.508 0 0 0 .5-.5v-2.58a2 2 0 0 0 1.5-1.93v-1a2 2 0 0 0-1.5-1.93Zm.5 2.93a1.006 1.006 0 0 1-.98 1H16a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0Z"}" data-name="${"Slider Vertical"}"></path></svg>`;
});
export {
  Component as default
};