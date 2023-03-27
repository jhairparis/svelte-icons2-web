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
  )}><path d="${"M0 1.642v20.716h8.516c1.313 0 2.488-.158 3.537-.476a8.747 8.747 0 0 0 2.787-1.408c1.154-.89 2.043-2.046 2.668-3.465.614-1.42.931-3.049.931-4.881-.01-1.578-.243-3.02-.709-4.313-.466-1.292-1.111-2.392-1.959-3.302-.836-.911-1.853-1.611-3.029-2.12-1.176-.497-2.478-.751-3.908-.751zM5.201 7.35l8.04 4.66-8.04 4.648zm15.992 9.162a2.716 2.716 0 0 0-2.71 2.71 2.716 2.716 0 0 0 2.71 2.712h.096A2.716 2.716 0 0 0 24 19.224a2.716 2.716 0 0 0-2.711-2.711z"}"></path></svg>`;
});
export {
  Component as default
};