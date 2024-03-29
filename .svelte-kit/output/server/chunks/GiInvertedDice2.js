import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M383 81.68A47.37 47.37 0 1 1 335.58 129 47.37 47.37 0 0 1 383 81.68zM81.67 383A47.37 47.37 0 1 0 129 335.59 47.37 47.37 0 0 0 81.67 383zM428 47.57H84A36.48 36.48 0 0 0 47.57 84v344A36.48 36.48 0 0 0 84 464.43h344A36.48 36.48 0 0 0 464.43 428V84A36.48 36.48 0 0 0 428 47.57m0-20A56.54 56.54 0 0 1 484.43 84v344A56.54 56.54 0 0 1 428 484.43H84A56.54 56.54 0 0 1 27.57 428V84A56.54 56.54 0 0 1 84 27.57z"}"></path></svg>`;
});
export {
  Component as default
};
