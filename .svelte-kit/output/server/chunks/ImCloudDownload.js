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
  )}><path d="${"M13.922 5.626A3.72 3.72 0 0 0 10.205 2a3.712 3.712 0 0 0-2.92 1.418 2.09 2.09 0 0 0-3.719 1.573 3.028 3.028 0 0 0-3.567 2.98A3.028 3.028 0 0 0 3.026 11H4.46l3.539 3.664L11.538 11h1.742a2.725 2.725 0 0 0 .641-5.374zM8 13l-3-3h2V7h2v3h2l-3 3z"}"></path></svg>`;
});
export {
  Component as default
};
