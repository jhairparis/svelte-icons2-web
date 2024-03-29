import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6 15.043V8H5v7.043l-3.646-3.646-.707.707L5.5 16.957l4.854-4.854-.707-.707L6 15.043zm-.512.488h.023l-.011.012-.012-.012zm10.158-9.927L12 1.957v7.096h-1V1.957L7.354 5.604l-.708-.708L11.5.043l4.854 4.854-.708.707z"}"></path></svg>`;
});
export {
  Component as default
};
