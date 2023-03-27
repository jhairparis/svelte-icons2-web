import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 640 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M32 224h32v192H32a31.962 31.962 0 0 1-32-32V256a31.962 31.962 0 0 1 32-32Zm512-48v272a64.063 64.063 0 0 1-64 64H160a64.063 64.063 0 0 1-64-64V176a79.974 79.974 0 0 1 80-80h112V32a32 32 0 0 1 64 0v64h112a79.974 79.974 0 0 1 80 80Zm-280 80a40 40 0 1 0-40 40 39.997 39.997 0 0 0 40-40Zm-8 128h-64v32h64Zm96 0h-64v32h64Zm104-128a40 40 0 1 0-40 40 39.997 39.997 0 0 0 40-40Zm-8 128h-64v32h64Zm192-128v128a31.962 31.962 0 0 1-32 32h-32V224h32a31.962 31.962 0 0 1 32 32Z"}"></path></svg>`;
});
export {
  Component as default
};