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
  )}><path d="${"M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM14 10.125C14 12.266 12.259 14 10.103 14h-4.2C3.747 14 2 12.266 2 10.125v-4.25C2 3.734 3.747 2 5.903 2h1.966c2.156 0 3.881 1.609 3.881 3.75.028.4.391.75.8.75h.672c.431 0 .775.453.775.881v2.744z"}"></path><path d="${"M11 10c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1zM9 6c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1z"}"></path></svg>`;
});
export {
  Component as default
};
