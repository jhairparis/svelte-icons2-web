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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm4.885 9.212C12.31 11.442 10.301 13 8 13s-4.31-1.558-4.885-3.788a.708.708 0 0 1 .685-.884c.322 0 .604.218.684.531a3.631 3.631 0 0 0 7.032 0 .707.707 0 1 1 1.369.354z"}"></path></svg>`;
});
export {
  Component as default
};
