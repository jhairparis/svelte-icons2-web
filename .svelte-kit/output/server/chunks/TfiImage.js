import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M1 1v15h15V1H1zm14 14H2v-2h13v2zM2 12V2h13v10H2zm12.203-1.835-.697.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-.826-.564 4.31-6.303 2.604 4.622 1.317-1.422 3.15 3.063z"}"></path></svg>`;
});
export {
  Component as default
};
