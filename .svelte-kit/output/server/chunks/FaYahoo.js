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
  )}><path d="${"M223.69 141.06 167 284.23l-56-143.17H14.93l105.83 249.13L82.19 480h94.17l140.91-338.94Zm105.4 135.79a58.22 58.22 0 1 0 58.22 58.22 58.22 58.22 0 0 0-58.22-58.22ZM394.65 32l-93 223.47h104.79L499.07 32Z"}"></path></svg>`;
});
export {
  Component as default
};
