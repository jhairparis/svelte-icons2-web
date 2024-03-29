import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m247.335 24.084-41.86 8.225v138.063l-39.803-5.288V40.241L21 68.734l6.757 95.175 219.578 41.42V24.083zm17.33 0v181.244l219.58-41.419L491 68.734 346.328 40.241v124.843l-39.95 5.288V32.309l-41.712-8.225zM29.079 181.681l3.966 55.52 165.088 45.824v96.644L38.038 309.463l5.287 73.878 204.01 104.428V222.806L29.078 181.681zm454.138 0-218.55 41.272v264.963L468.969 383.34l5.14-73.732-159.8 70.06v-96.644L479.25 237.2l3.966-55.519z"}"></path></svg>`;
});
export {
  Component as default
};
