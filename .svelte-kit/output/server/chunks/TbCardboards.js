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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 8v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06a2.5 2.5 0 0 0 2.5-2.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}"></path><circle cx="${"8"}" cy="${"12"}" r="${"1"}"></circle><circle cx="${"16"}" cy="${"12"}" r="${"1"}"></circle></svg>`;
});
export {
  Component as default
};
