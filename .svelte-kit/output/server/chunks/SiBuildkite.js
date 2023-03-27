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
  )}><path d="${"m23.613 8.143-7.668-3.856v7.712l7.668-3.855zM8.166 15.857V8.143L.387 4.287V12l7.78 3.857zM.183 3.958a.382.382 0 0 1 .377-.017l7.606 3.771 7.607-3.771a.386.386 0 0 1 .346 0l7.668 3.857a.386.386 0 0 1 .213.345v7.71a.388.388 0 0 1-.213.346l-7.668 3.86a.389.389 0 0 1-.562-.345v-7.09l-7.219 3.58a.392.392 0 0 1-.344 0L.215 12.346A.387.387 0 0 1 0 12V4.287a.385.385 0 0 1 .183-.329z"}"></path></svg>`;
});
export {
  Component as default
};