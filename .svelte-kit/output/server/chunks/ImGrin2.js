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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3 3.688a1.815 1.815 0 0 1 1.788 2.115.312.312 0 0 1-.616 0c-.096-.573-.589-.833-1.171-.833s-1.074.26-1.171.833a.312.312 0 0 1-.616 0 1.815 1.815 0 0 1 1.788-2.115zm-6 0a1.815 1.815 0 0 1 1.788 2.115.312.312 0 0 1-.616 0c-.096-.573-.589-.833-1.171-.833s-1.074.26-1.171.833a.312.312 0 0 1-.616 0 1.815 1.815 0 0 1 1.788-2.115zM3 9h3v3.873A4.017 4.017 0 0 1 3 9zm4 4V9h2v4H7zm3-.127V9h3a4.017 4.017 0 0 1-3 3.873z"}"></path></svg>`;
});
export {
  Component as default
};
