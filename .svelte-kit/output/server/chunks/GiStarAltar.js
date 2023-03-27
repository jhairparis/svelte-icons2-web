import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m256 25.61-97.8 36.67L256 86.72l97.8-24.44L256 25.61zM136.1 75.3 105.9 407h300.2L375.9 75.3l-119.9 30-119.9-30zM256 128l30 72.7 78.3 6-59.8 51L323 334l-67-41.2-66.9 41.3 18.4-76.5-59.8-50.9 78.4-6L256 128zM70.09 425l-24.8 62H237.3l-49.6-62H70.09zm140.61 0 45.3 56.6 45.3-56.6h-90.6zm113.6 0-49.6 62h192l-24.8-62H324.3z"}"></path></svg>`;
});
export {
  Component as default
};