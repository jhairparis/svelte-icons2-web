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
  )}><path d="${"m10.617 11.473 4.686 3.695-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm5.797 17.305a.851.851 0 0 1-.875.83c-.236 0-.416-.09-.664-.293l-6.19-5-2.079 5.203H6.191L11.438 5.44a.79.79 0 0 1 .764-.506.756.756 0 0 1 .742.506l4.774 11.494c.045.111.08.234.08.348l-.001.023z"}"></path></svg>`;
});
export {
  Component as default
};