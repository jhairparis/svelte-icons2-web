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
  )}><path d="${"m19.095 8.43-1.424-1.404-4.914 4.985 4.985 4.914 1.404-1.424-2.502-2.467 6.497.05.016-2-6.628-.05 2.566-2.604ZM5.467 15.562l1.416 1.412 4.944-4.956-4.956-4.943L5.459 8.49l2.591 2.585-7.206.024.006 2 7.097-.024-2.48 2.486Z"}"></path></svg>`;
});
export {
  Component as default
};
