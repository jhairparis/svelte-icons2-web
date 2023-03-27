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
  )}><path d="${"M6.002 15.999a2 2 0 1 0-.004 4 2 2 0 0 0 .004-4zM6 4a2 2 0 0 0 0 4c5.514 0 10 4.486 10 10a2 2 0 0 0 4 0c0-7.72-6.28-14-14-14zm0 6a2 2 0 0 0 0 4c2.205 0 4 1.794 4 4a2 2 0 0 0 4 0c0-4.411-3.589-8-8-8z"}"></path></svg>`;
});
export {
  Component as default
};