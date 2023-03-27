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
  )}><path d="${"M3 0v6.499l5.466 9.499L14 6.5V0H3zm5.471 14h.002l-.001.002L8.471 14zM8.5 6a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm4.5.23-4 6.866V6.929c.86-.223 1.5-1 1.5-1.929 0-1.103-.897-2-2-2s-2 .897-2 2c0 .929.64 1.706 1.5 1.929v6.254L4 6.231V1h9v5.23z"}"></path></svg>`;
});
export {
  Component as default
};