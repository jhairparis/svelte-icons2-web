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
  )}><path d="${"M6.525 10.03a18.279 18.279 0 0 1 15.78.263c.264.198.658 0 .724-.263l.92-2.827c.132-.263 0-.658-.328-.79A22.356 22.356 0 0 0 .279 8.65a.657.657 0 0 0-.197.855l2.17 4.8c.13.329.525.526.854.395 2.433-.921 6.18-1.841 9.995-1.315-2.63.46-4.669 1.38-6.313 2.367a.657.657 0 0 0-.197.854l1.315 3.025c.132.263.46.329.657.132a7.357 7.357 0 0 1 1.513-1.184c2.104-1.184 4.997-2.104 8.876-1.907a.657.657 0 0 0 .658-.46l.986-2.959c.132-.263 0-.658-.263-.789A20.054 20.054 0 0 0 6.46 10.03z"}"></path></svg>`;
});
export {
  Component as default
};