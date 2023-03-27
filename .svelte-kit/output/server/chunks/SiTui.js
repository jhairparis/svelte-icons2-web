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
  )}><path d="${"M24 4.517a2.117 2.117 0 0 1-2.117 2.117 2.117 2.117 0 0 1-2.117-2.117A2.117 2.117 0 0 1 21.883 2.4 2.117 2.117 0 0 1 24 4.517zM1.14 7.747h5.705c.564 0 .98.178 1.147.972.185.884.113 1.499-.886 1.569l-1.791.132c1.318 8.33 9.028 11.045 13.222 2.073.695-1.485.922-1.755 1.683-1.567 1.031.256 1.172.79.677 2.283-3.624 11.057-15.819 12.166-18.211-2.604l-1.455.105C.046 10.794 0 9.796 0 9.24c0-1.099.407-1.493 1.14-1.493z"}"></path></svg>`;
});
export {
  Component as default
};