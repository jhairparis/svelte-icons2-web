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
  )}><path d="${"M24 12c0 6.627-5.373 12-12 12v-2.807A9.193 9.193 0 1 0 2.806 12H0C0 5.373 5.373 0 12 0s12 5.373 12 12zm-3.545 0A8.455 8.455 0 0 0 12 3.545v2.797A5.658 5.658 0 1 1 6.342 12H3.545a8.455 8.455 0 1 0 16.91 0zM12 9.882V7.049c-2.744 0-4.968 2.216-4.968 4.951 0 2.735 2.224 4.951 4.968 4.951s4.968-2.216 4.968-4.951h-2.843c0 1.17-.951 2.118-2.125 2.118S9.875 13.17 9.875 12 10.826 9.882 12 9.882z"}"></path></svg>`;
});
export {
  Component as default
};