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
  )}><path d="${"M7.717 5.723a2 2 0 1 0 1.69 3.625l10.876-5.071a2 2 0 0 0-1.69-3.625L7.717 5.723ZM4.75 15.381a2 2 0 0 1 .967-2.658l10.876-5.071a2 2 0 1 1 1.69 3.625L7.407 16.348a2 2 0 0 1-2.657-.967Zm-2 7a2 2 0 0 1 .967-2.658l10.876-5.071a2 2 0 1 1 1.69 3.625L5.407 23.348a2 2 0 0 1-2.657-.967Z"}"></path></svg>`;
});
export {
  Component as default
};
