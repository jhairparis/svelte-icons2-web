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
  )}><path d="${"M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"}"></path></svg>`;
});
export {
  Component as default
};