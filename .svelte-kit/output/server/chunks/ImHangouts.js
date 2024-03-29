import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M7.997 0a6.91 6.91 0 0 0-6.909 6.909c0 3.616 3.294 6.547 6.909 6.547V16c4.197-2.128 6.916-5.556 6.916-9.091 0-3.816-3.1-6.909-6.916-6.909zM7 8c0 .828-.447 1.5-1 1.5V8H4V5h3v3zm5 0c0 .828-.447 1.5-1 1.5V8H9V5h3v3z"}"></path></svg>`;
});
export {
  Component as default
};
