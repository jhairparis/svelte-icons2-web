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
  )}><path d="${"M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 0 0 5 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 0 0 1.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 0 0-2.025-3.276l.5-1.001a.5.5 0 0 0-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 0 0-2.84 0l-.13.052L5.948.276a.5.5 0 0 0-.895.447l.5 1.001A4.499 4.499 0 0 0 3.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 0 1-.001-1h.002A.5.5 0 0 1 6.5 4zm3 0a.5.5 0 0 1-.001-1h.003a.5.5 0 0 1-.001 1z"}"></path></svg>`;
});
export {
  Component as default
};
