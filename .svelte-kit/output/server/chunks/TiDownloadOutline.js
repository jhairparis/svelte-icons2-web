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
  )}><path d="${"M20.986 17c0-.105-.004-.211-.038-.316l-2-6A.997.997 0 0 0 18 10h-.561l.682-.678a3.002 3.002 0 0 0 0-4.242c-.81-.812-2.068-1.078-3.121-.709V3c0-1.654-1.346-3-3-3S9 1.346 9 3v1.371c-1.052-.369-2.311-.103-3.121.709a3.003 3.003 0 0 0 .002 4.244l.68.676H6a.997.997 0 0 0-.948.684l-2 6a1.007 1.007 0 0 0-.038.316C3 17 3 22 3 22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1s0-5-.014-5zM7.293 6.494a1 1 0 0 1 1.414 0L11 8.787V3a1 1 0 0 1 2 0v5.787l2.293-2.293a1.025 1.025 0 0 1 1.414 0 .998.998 0 0 1 .002 1.412L12 12.59 7.293 7.908a.999.999 0 0 1 0-1.414zM6.721 12h1.852l3.429 3.41L15.43 12h1.852l1.667 5H5.055l1.666-5zM19 21H5v-3h14v3z"}"></path></svg>`;
});
export {
  Component as default
};
