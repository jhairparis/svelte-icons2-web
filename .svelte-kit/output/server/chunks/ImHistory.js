import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M10 1a7 7 0 1 1 0 14v-1.5c1.469 0 2.85-.572 3.889-1.611S15.5 9.469 15.5 8c0-1.469-.572-2.85-1.611-3.889S11.469 2.5 10 2.5c-1.469 0-2.85.572-3.889 1.611A5.455 5.455 0 0 0 4.591 7H7.5L4 11 .5 7h2.571A7.001 7.001 0 0 1 10 1zm3 6v2H9V4h2v3z"}"></path></svg>`;
});
export {
  Component as default
};
