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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m7.94 4.146 3.482 6.03-5.94 10.293L2 14.44 7.94 4.146zm2.176 10.294H22l-3.482 6.029H6.635l3.481-6.029zm4.343-1L8.518 3.145h6.964l5.94 10.295H14.46z"}"></path></svg>`;
});
export {
  Component as default
};
