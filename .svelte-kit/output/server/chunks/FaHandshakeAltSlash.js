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
  )}><path d="${"M358.59 195.6 504.2 313.8a63.4 63.4 0 0 1 22.21 37.91H624a16.05 16.05 0 0 0 16-16v-191.8A16 16 0 0 0 624 128H512l-54.59-54.59A32 32 0 0 0 434.8 64h-85.89a32 32 0 0 0-21.61 8.41l-88.12 80.68-25.69-19.85L289.09 64H205.3a32 32 0 0 0-22.6 9.41l-20.34 20.3L45.47 3.38A16 16 0 0 0 23 6.19L3.38 31.46a16 16 0 0 0 2.81 22.45l588.35 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.81-22.45L303.4 202.72l32.69-29.92 27-24.7a16 16 0 0 1 21.61 23.61ZM16 128a16.05 16.05 0 0 0-16 16v191.91a16 16 0 0 0 16 16h130.3l90.5 81.89a64 64 0 0 0 90-9.3l.2-.2 17.91 15.5a37.16 37.16 0 0 0 52.29-5.39l8.8-10.82L23.56 128Z"}"></path></svg>`;
});
export {
  Component as default
};