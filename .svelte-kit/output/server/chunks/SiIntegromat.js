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
  )}><path d="${"M12 0c-.681 0-1.349.057-2 .166v4.09a8.002 8.002 0 0 1 2-.253c.69 0 1.36.088 2 .253V.166C13.35.056 12.68 0 12 0zM8.002.683C3.342 2.332 0 6.78 0 12c0 6.623 5.377 12 12 12s12-5.377 12-12c0-5.22-3.342-9.668-8.001-11.317v4.392a7.997 7.997 0 1 1-7.997 0zM12 6.003c-.7 0-1.374.12-2 .342v9.32a5.98 5.98 0 0 0 2 .343 6 6 0 0 0 2-.342V6.345a5.977 5.977 0 0 0-2-.342z"}"></path></svg>`;
});
export {
  Component as default
};