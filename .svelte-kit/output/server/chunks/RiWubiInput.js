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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2H3zm13-9H9.927l-1.235 7H16v-7z"}"></path></svg>`;
});
export {
  Component as default
};
