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
  )}><path d="${"M416 192a95.42 95.42 0 0 1-30.94 70.21A95.8 95.8 0 0 1 352 448H160a96 96 0 0 1 0-192h88.91A95.3 95.3 0 0 1 224 192H96a96 96 0 0 0-96 96v128a96 96 0 0 0 96 96h320a96 96 0 0 0 96-96V288a96 96 0 0 0-96-96Zm-96 64a64 64 0 1 0-64-64 64 64 0 0 0 64 64ZM208 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48Zm176-32a32 32 0 1 0-32-32 32 32 0 0 0 32 32ZM160 288a64 64 0 0 0 0 128h192a64 64 0 0 0 0-128Z"}"></path></svg>`;
});
export {
  Component as default
};