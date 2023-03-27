import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 640 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17.89 123.62 5.51 142.2c-14.2 21.3 1 49.8 26.59 49.8h74.26ZM576 413.42V224h-64v140l-128-99v-41h-53.08l-41.4-32H608c25.5 0 40.7-28.5 26.59-49.8l-85.29-128A32.18 32.18 0 0 0 522.6 0H117.42a31.87 31.87 0 0 0-26.61 14.2l-10.66 16L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.35 454.72a16 16 0 0 0 22.47-2.82l19.64-25.26a16 16 0 0 0-2.81-22.45ZM320 384H128V224H64v256a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-73.41l-64-49.47Z"}"></path></svg>`;
});
export {
  Component as default
};