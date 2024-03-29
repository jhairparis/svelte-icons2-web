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
  )}><path d="${"M13.5 3h-8A2.507 2.507 0 0 0 3 5.5v8C3 14.875 4.125 16 5.5 16h8c1.375 0 2.5-1.125 2.5-2.5v-8C16 4.125 14.875 3 13.5 3zm-7 11a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 14zm0-6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 8zm3 3a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 9.5 11zm3 3a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 14zm0-6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 8zm.449-6A2.509 2.509 0 0 0 10.5 0h-8A2.507 2.507 0 0 0 0 2.5v8c0 1.204.862 2.216 2 2.449V3c0-.55.45-1 1-1h9.949z"}"></path></svg>`;
});
export {
  Component as default
};
