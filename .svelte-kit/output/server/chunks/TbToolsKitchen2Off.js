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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14.386 10.409C14.916 8.129 16.152 5.717 19 3v12m-4 0h-1c-.002-.313-.002-.627.002-.941M19 19v2h-1v-3M8 8v13M5 5v2a3 3 0 0 0 4.546 2.572M11 7V4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
