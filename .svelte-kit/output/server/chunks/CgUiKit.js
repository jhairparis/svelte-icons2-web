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
  )}><path fill-rule="${"evenodd"}" d="${"M14 6h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-4-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-4Z"}" clip-rule="${"evenodd"}"></path><path d="${"m6 7.46-2.507-.418A3 3 0 0 0 0 10v4.917a3 3 0 0 0 3.493 2.96L6 17.458v-2.027l-2.836.472A1 1 0 0 1 2 14.918v-4.917a1 1 0 0 1 1.164-.987L6 9.487V7.459Zm12 0 2.507-.418A3 3 0 0 1 24 10v4.917a3 3 0 0 1-3.493 2.96L18 17.458v-2.027l2.836.472A1 1 0 0 0 22 14.918v-4.917a1 1 0 0 0-1.164-.987L18 9.487V7.459Z"}"></path></svg>`;
});
export {
  Component as default
};
