import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 34 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M21.66 10.97c.695 0 1.264-.563 1.264-1.253s-.569-1.253-1.264-1.253c-.695 0-1.264.563-1.264 1.253 0 .695.563 1.253 1.264 1.253zm-1.235 1.097h2.442v9.183h-2.442v-9.183zm-7.77 6.104h3.304l.893 3.076h2.501L15.721 9.181h-3.036v1.191L9.5 21.247h2.262l.893-3.076zm1.637-6.843 1.221 4.733h-2.441l1.22-4.733z"}"></path><path fill="${"#444"}" d="${"M3.002 2.316v27.007h27.582V2.316H3.002zm25.514 24.881H5.11V4.442h23.406v22.755z"}"></path></svg>`;
});
export {
  Component as default
};