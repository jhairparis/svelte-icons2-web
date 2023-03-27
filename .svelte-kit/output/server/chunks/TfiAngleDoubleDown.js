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
  )}><path d="${"M8.5 10.644 1.646 3.79l.707-.707L8.5 9.229l6.146-6.146.707.707L8.5 10.644zm0 3.43L2.354 7.927l-.708.707L8.5 15.488l6.854-6.854-.707-.707L8.5 14.074z"}"></path></svg>`;
});
export {
  Component as default
};