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
  )}><path d="${"M16.15 0a4.146 4.146 0 0 0-2.94 1.225c-.981.98-1.34 2.288-1.177 3.53-.458 2.548-2.843 2.908-3.889 2.94-1.176-.098-2.352.327-3.235 1.21a4.142 4.142 0 0 0 0 5.88 4.142 4.142 0 0 0 5.882 0A4.136 4.136 0 0 0 12 12.108v-.23c.097-3.104 2.777-3.529 3.92-3.561h.523c.98-.066 1.928-.458 2.647-1.21a4.142 4.142 0 0 0 0-5.88A4.146 4.146 0 0 0 16.15 0zm-.327 15.7a4.15 4.15 0 0 0-4.15 4.15 4.15 4.15 0 0 0 4.15 4.15 4.15 4.15 0 0 0 4.15-4.15 4.15 4.15 0 0 0-4.15-4.15z"}"></path></svg>`;
});
export {
  Component as default
};