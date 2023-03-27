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
  )}><path d="${"M384 16c48 32 64 80 64 112 0 128 0 256-32 368l-16-112c-48 32-112 64-144 64s-96-32-144-64L96 496C64 384 64 256 64 128c0-32 16-80 64-112-16 48-16 96 0 128 64-32 192-32 256 0 16-32 16-80 0-128zm0 256c-33.7 46.8-52 57.2-112 80 33.5 32 95.5 21.5 128-16 14.1-16.3 6.8-44.6-16-64zm-256 0c-22.8 19.4-30.1 47.7-16 64 32.5 37.5 94.5 48 128 16-60-22.8-78.3-33.2-112-80z"}"></path></svg>`;
});
export {
  Component as default
};