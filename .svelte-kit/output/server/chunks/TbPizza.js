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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 21.5c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.09 19.09 0 0 1 12 21.5z"}"></path><path d="${"M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634 14.944 14.944 0 0 0 6.502-1.479M13 11.01V11m-2 3v-.01"}"></path></svg>`;
});
export {
  Component as default
};
