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
  )}><path d="${"M0 128.21V384h64a32 32 0 0 0 32-32V184l-72.17-55.79ZM48 320.1a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm80 31.81h18.3l90.5 81.89a64 64 0 0 0 90-9.3l.2-.2 17.91 15.5a37.16 37.16 0 0 0 52.29-5.39l8.8-10.82-278-214.87Zm416-223.7V352.1a32 32 0 0 0 32 32h64V128.21Zm48 223.89a16 16 0 1 1 16-16 16 16 0 0 1-16 16ZM303.33 202.67l59.58-54.57a16 16 0 0 1 21.59 23.61l-26.09 23.89L504 313.8a73.08 73.08 0 0 1 7.91 7.7V128L457.3 73.41A31.76 31.76 0 0 0 434.7 64h-85.9a31.93 31.93 0 0 0-21.6 8.41l-88.07 80.64-25.64-19.81L289.09 64H205.3a32 32 0 0 0-22.6 9.41l-20.34 20.31L45.47 3.38A16 16 0 0 0 23 6.19L3.38 31.46a16 16 0 0 0 2.81 22.45l588.34 454.72a16 16 0 0 0 22.47-2.81l19.65-25.27a16 16 0 0 0-2.82-22.45Z"}"></path></svg>`;
});
export {
  Component as default
};