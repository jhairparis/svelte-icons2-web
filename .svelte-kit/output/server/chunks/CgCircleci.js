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
  )}><path fill-rule="${"evenodd"}" d="${"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM4.144 13.517a8 8 0 1 0-.006-3l2.59-.01a5.478 5.478 0 1 1 .004 3l-2.588.01ZM9.522 12a2.478 2.478 0 1 0 4.956 0 2.478 2.478 0 0 0-4.956 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
