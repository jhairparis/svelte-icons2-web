import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 576 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m498.11 206.4-52.8-191.68L248.2 66.08 219 116.14l-59.2-.43L15.54 256l144.28 140.32 59.17-.43 29.24 50 197.08 51.36 52.8-191.62-30-49.63Zm-274.34-82.2 150.78-37.69L288 232.33H114.87Zm0 263.63-108.9-108.12H288l86.55 145.81Zm193 14L330.17 256l86.58-145.84L458.56 256Z"}"></path></svg>`;
});
export {
  Component as default
};
