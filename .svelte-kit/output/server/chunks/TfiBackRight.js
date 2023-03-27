import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M14.583 15v1H7.5C4.468 16 2 13.533 2 10.5S4.468 5 7.5 5h2.912L7.766 2.354l.707-.707L12.326 5.5 8.473 9.354l-.707-.708L10.412 6H7.5C5.019 6 3 8.019 3 10.5S5.019 15 7.5 15h7.083z"}"></path></svg>`;
});
export {
  Component as default
};