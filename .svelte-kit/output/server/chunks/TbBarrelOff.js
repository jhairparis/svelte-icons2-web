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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 4h8.722a2 2 0 0 1 1.841 1.22C19.521 7.48 20 9.74 20 12a16.35 16.35 0 0 1-.407 3.609m-.964 3.013-.066.158A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22C4.479 16.52 4 14.26 4 12c0-2.21.458-4.42 1.374-6.63"}"></path><path d="${"M14 4c.585 2.337.913 4.674.985 7.01m-.114 3.86A33.415 33.415 0 0 1 14 20M10 4a34.42 34.42 0 0 0-.366 1.632m-.506 3.501A32.126 32.126 0 0 0 9 12c0 2.667.333 5.333 1 8m-5.5-4H16m3.5-8H12M8 8H4.5M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
