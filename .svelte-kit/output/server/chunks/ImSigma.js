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
  )}><path d="${"m14.713 11.48.694-1.48h.594l-1 6h-15v-1.16l5.18-6.113-5.18-5.18V0h15.313l.688 4h-.537l-.293-.607C14.62 2.247 14.205 2 13.002 2H2.658l5.517 5.516-4.647 5.483h8.474c1.813 0 2.291-.65 2.713-1.52z"}"></path></svg>`;
});
export {
  Component as default
};
