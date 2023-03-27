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
  )}><path d="${"M10.44 0 9.36 1.87 22.136 24h1.144a.72.72 0 0 0 .72-.72v-3.119L12.36 0zm3 0L24 18.29V.72a.72.72 0 0 0-.72-.72zM8.82 2.806l-1.98 3.43L16.976 24h4.08zM6.24 7.274 4.76 9.837a1.941 1.941 0 0 0 0 1.942C6.531 14.842 11.816 24 11.816 24h4.08zm-2.58 4.47L0 18.082v5.197c0 .397.323.72.72.72h10.016Z"}"></path></svg>`;
});
export {
  Component as default
};