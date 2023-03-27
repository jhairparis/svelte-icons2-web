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
  )}><path d="${"M16 10v6H0v-6h2v4h12v-4zM3 11h10v2H3zm.237-2.165.433-1.953 9.763 2.164L13 10.999zM4.37 4.821l.845-1.813 9.063 4.226-.845 1.813zm11.126.827-1.218 1.587-7.934-6.088L7.224 0h.91z"}"></path></svg>`;
});
export {
  Component as default
};