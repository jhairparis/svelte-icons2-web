import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 20c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3zM8 7c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1zm7 13c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3zm0-13c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1z"}"></path></svg>`;
});
export {
  Component as default
};
