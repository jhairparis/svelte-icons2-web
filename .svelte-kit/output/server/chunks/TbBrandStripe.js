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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11.453 8.056c0-.623.518-.979 1.442-.979 1.69 0 3.41.343 4.605.923l.5-4c-.948-.449-2.82-1-5.5-1-1.895 0-3.373.087-4.5 1-1.172.956-2 2.33-2 4 0 3.03 1.958 4.906 5 6 1.961.69 3 .743 3 1.5 0 .735-.851 1.5-2 1.5-1.423 0-3.963-.609-5.5-1.5l-.5 4c1.321.734 3.474 1.5 6 1.5 2.004 0 3.957-.468 5.084-1.36C18.347 18.661 19 17.372 19 15.5c0-3.096-1.915-4.547-5.003-5.637-1.646-.605-2.544-1.07-2.544-1.807z"}"></path></svg>`;
});
export {
  Component as default
};