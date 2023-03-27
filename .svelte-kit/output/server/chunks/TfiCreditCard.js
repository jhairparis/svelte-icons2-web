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
  )}><path d="${"M15.5 2h-14C.673 2 0 2.673 0 3.5v10c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V8h15v5.5zM1 5V3.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5V5H1z"}"></path></svg>`;
});
export {
  Component as default
};