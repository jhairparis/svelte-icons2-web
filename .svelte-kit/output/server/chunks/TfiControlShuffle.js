import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m8.94 6.871 1.081-1.34-.004-.003A4.504 4.504 0 0 1 13.395 4h1.898l-1.646-1.646.707-.707L17.207 4.5l-2.854 2.854-.707-.707L15.293 5h-1.898c-.989 0-1.931.425-2.595 1.159L9.72 7.498l-.78-.627zm-3.089 3.825-.011-.008A3.484 3.484 0 0 1 3.107 12H0v1h3.107a4.477 4.477 0 0 0 3.503-1.676l.011.009.941-1.166-.777-.629-.934 1.158zm7.795-.342L15.293 12h-1.898a3.484 3.484 0 0 1-2.7-1.281L6.426 5.454l-.01.008A4.496 4.496 0 0 0 3.107 4H0v1h3.107c.998 0 1.948.428 2.611 1.17l4.161 5.132-.005.004A4.485 4.485 0 0 0 13.394 13h1.898l-1.646 1.646.707.707 2.854-2.854-2.854-2.854-.707.709z"}"></path></svg>`;
});
export {
  Component as default
};