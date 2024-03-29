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
  )}><path d="${"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM3 8v1c0 2.2 1.8 4 4 4h2c2.2 0 4-1.8 4-4V8H3zm3 3.828a3.008 3.008 0 0 1-1.118-.71A2.978 2.978 0 0 1 4 9h2v2.828zM9 12H7V9h2v3zm2.118-.882a3.008 3.008 0 0 1-1.118.71V9h2c0 .797-.313 1.549-.882 2.118zM3.521 6c.153 0 .283-.11.308-.261.096-.573.589-.989 1.171-.989s1.074.416 1.171.989a.312.312 0 0 0 .616 0 1.815 1.815 0 0 0-1.788-2.115 1.815 1.815 0 0 0-1.788 2.115.312.312 0 0 0 .308.261zm6 0c.153 0 .283-.11.308-.261.096-.573.589-.989 1.171-.989s1.074.416 1.171.989a.312.312 0 0 0 .616 0 1.815 1.815 0 0 0-1.788-2.115 1.815 1.815 0 0 0-1.788 2.115.312.312 0 0 0 .308.261z"}"></path></svg>`;
});
export {
  Component as default
};
