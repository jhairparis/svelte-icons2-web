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
  )}><path d="${"M17 7H6c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3zm1 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4h13v4zm0-6H5v-1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1zm-4 5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1z"}"></path></svg>`;
});
export {
  Component as default
};