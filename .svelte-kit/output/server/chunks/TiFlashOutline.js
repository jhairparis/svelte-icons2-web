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
  )}><path d="${"M14.5 4h.005M14.5 4 12 10l5 2.898L9.5 20l2.5-6-5-2.9L14.5 4m0-2a2.024 2.024 0 0 0-1.379.551L5.624 9.646a1.998 1.998 0 0 0-.61 1.686c.072.626.437 1.182.982 1.498l3.482 2.021-1.826 4.381a2.003 2.003 0 0 0 1.847 2.77c.498 0 .993-.186 1.375-.548l7.5-7.103a1.995 1.995 0 0 0 .61-1.685 1.999 1.999 0 0 0-.982-1.498L14.52 9.15l1.789-4.293A2 2 0 0 0 14.5 2z"}"></path></svg>`;
});
export {
  Component as default
};
