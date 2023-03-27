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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 20V4m4 0v.01M12 4v.01M16 4v.01M20 4v.01M12 8v.01M20 8v.01M8 12v.01m4-.01v.01m4-.01v.01m4-.01v.01M12 16v.01m8-.01v.01M8 20v.01m4-.01v.01m4-.01v.01m4-.01v.01"}"></path></svg>`;
});
export {
  Component as default
};