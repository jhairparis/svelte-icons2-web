import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.002 14.5H4.78c-1.535 0-2.778-1.12-2.778-2.5S3.245 9.5 4.78 9.5h.222m14 5h.222c1.534 0 2.778-1.12 2.778-2.5s-1.244-2.5-2.778-2.5h-.222M9 10h1m4 0h1m-6 4h5"}"></path><path d="${"M19 15V8.51a2 2 0 0 0-1.45-1.923l-5-1.429a2 2 0 0 0-1.1 0l-1.788.511m-3.118.891-.094.027A2 2 0 0 0 5 8.509v6.982a2 2 0 0 0 1.45 1.923l5 1.429a2 2 0 0 0 1.1 0l4.899-1.4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
