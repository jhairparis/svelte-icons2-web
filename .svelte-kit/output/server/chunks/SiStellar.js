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
  )}><path d="${"M12.283 1.851A10.154 10.154 0 0 0 1.846 12.002c0 .259.01.516.03.773A1.847 1.847 0 0 1 .872 14.56L0 15.005v2.074l2.568-1.309.832-.424.82-.417 14.71-7.496 1.653-.842L24 4.85V2.776l-3.387 1.728-2.89 1.473-13.955 7.108a8.376 8.376 0 0 1-.07-1.086 8.313 8.313 0 0 1 12.366-7.247l1.654-.843.247-.126a10.154 10.154 0 0 0-5.682-1.932zM24 6.925 5.055 16.571l-1.653.844L0 19.15v2.072L3.378 19.5l2.89-1.473 13.97-7.117a8.474 8.474 0 0 1 .07 1.092A8.313 8.313 0 0 1 7.93 19.248l-.101.054-1.793.914a10.154 10.154 0 0 0 16.119-8.214c0-.26-.01-.522-.03-.78a1.848 1.848 0 0 1 1.003-1.785L24 8.992Z"}"></path></svg>`;
});
export {
  Component as default
};