import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M19.707 5.293a.999.999 0 0 0-1.414 0l-1.551 1.551c-.345-.688-.987-1.02-1.604-1.02-.449 0-.905.152-1.356.453L11.11 8.058C10.357 8.561 8.904 9 8 9c-1.654 0-3 1.346-3 3v2c0 1.237.754 2.302 1.826 2.76l-1.533 1.533a.999.999 0 1 0 1.414 1.414l2.527-2.527c.697.174 1.416.455 1.875.762l2.672 1.781c.451.301.907.453 1.356.453.898 0 1.863-.681 1.863-2.176V9.414l2.707-2.707a.999.999 0 0 0 0-1.414zm-4.816 2.648.104-.062L15 8v1.293l-2 2V9.202l1.891-1.261zM7 12a1 1 0 0 1 1-1c1.211 0 2.907-.495 4-1.146v2.439l-2.83 2.83A6.535 6.535 0 0 0 8 15a1 1 0 0 1-1-1v-2zm3.301 3.406L12 13.707v2.439a8.267 8.267 0 0 0-1.699-.74zm4.693 2.714-.104-.062-1.89-1.26v-4.091l2-2V18l-.006.12z"}"></path></svg>`;
});
export {
  Component as default
};