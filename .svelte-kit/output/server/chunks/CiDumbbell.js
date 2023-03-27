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
  )}><path d="${"M21.435 11.5h-.38V8.12a1.626 1.626 0 0 0-1.62-1.62h-.63v-.38a1.625 1.625 0 0 0-3.25 0v5.38h-7.11V6.12a1.625 1.625 0 0 0-3.25 0v.38h-.63a1.62 1.62 0 0 0-1.62 1.62v3.38h-.38a.5.5 0 1 0 0 1h.38v3.37a1.622 1.622 0 0 0 1.62 1.63H5.2v.37a1.625 1.625 0 1 0 3.25 0V12.5h7.11v5.37a1.625 1.625 0 1 0 3.25 0v-.37h.63a1.628 1.628 0 0 0 1.62-1.63V12.5h.38a.5.5 0 1 0 0-1ZM5.2 16.5h-.63a.625.625 0 0 1-.62-.63V8.12a.623.623 0 0 1 .62-.62h.63Zm2.25 1.37a.634.634 0 0 1-.63.63.625.625 0 0 1-.62-.63V6.12a.623.623 0 0 1 .62-.62.632.632 0 0 1 .63.62Zm10.36 0a.625.625 0 1 1-1.25 0V6.12a.625.625 0 0 1 1.25 0Zm2.25-2a.625.625 0 0 1-.62.63h-.63v-9h.63a.623.623 0 0 1 .62.62Z"}"></path></svg>`;
});
export {
  Component as default
};