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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zm0 0 1-5 6 1"}"></path><circle cx="${"19"}" cy="${"4"}" r="${"1"}"></circle><circle cx="${"9"}" cy="${"13"}" r="${".5"}" fill="${"currentColor"}"></circle><circle cx="${"15"}" cy="${"13"}" r="${".5"}" fill="${"currentColor"}"></circle><path d="${"M10 17c.667.333 1.333.5 2 .5s1.333-.167 2-.5"}"></path></svg>`;
});
export {
  Component as default
};
