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
  )}><path d="${"m9 5 2 2-4 4-2-2zm6.649-.351L14.5 3.5 14 4a1.414 1.414 0 1 1-1.999-2l.5-.5L11.352.351a1.208 1.208 0 0 0-1.703 0L.352 9.648a1.208 1.208 0 0 0 0 1.703L1.501 12.5 2 12.001A1.414 1.414 0 1 1 4 14l-.5.5 1.149 1.149a1.208 1.208 0 0 0 1.703 0l9.297-9.297a1.208 1.208 0 0 0 0-1.703zM7 13 3 9l6-6 4 4-6 6z"}"></path></svg>`;
});
export {
  Component as default
};
