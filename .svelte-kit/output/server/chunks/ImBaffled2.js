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
  )}><path d="${"M6 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"}"></path><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 6.5zm6 5.5H6v-1h4v1zm.5-4a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 10.5 8z"}"></path></svg>`;
});
export {
  Component as default
};
