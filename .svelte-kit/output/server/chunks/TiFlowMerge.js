import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18 16.184v-1.851c0-1.93-1.57-3.5-3.5-3.5-.827 0-1.5-.673-1.5-1.5V7.816A2.997 2.997 0 0 0 15 5c0-1.654-1.346-3-3-3S9 3.346 9 5c0 1.302.839 2.401 2 2.815v1.518c0 .827-.673 1.5-1.5 1.5-1.93 0-3.5 1.57-3.5 3.5v1.851A2.997 2.997 0 0 0 4 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.997 2.997 0 0 0-2-2.816v-1.851c0-.827.673-1.5 1.5-1.5.979 0 1.864-.407 2.5-1.058a3.487 3.487 0 0 0 2.5 1.058c.827 0 1.5.673 1.5 1.5v1.851A2.997 2.997 0 0 0 14 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.997 2.997 0 0 0-2-2.816zM7 20a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm5-16a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm5 16a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};