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
  )}><path d="${"M15.414.586a2 2 0 0 0-2.828 0L9.897 3.275 8.001 1.379 5.88 3.5l1.663 1.663L.166 12.54a.56.56 0 0 0-.161.46H.001v2.5a.5.5 0 0 0 .5.5h2.563a.561.561 0 0 0 .398-.165l7.377-7.377 1.663 1.663L14.623 8l-1.896-1.896 2.689-2.689a2 2 0 0 0 0-2.828zM2.705 15H1v-1.705l7.337-7.337 1.704 1.704-7.337 7.337z"}"></path></svg>`;
});
export {
  Component as default
};
