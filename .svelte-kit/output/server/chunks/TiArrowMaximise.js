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
  )}><path d="${"M15 4a1 1 0 1 0 0 2h1.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414L18 7.414V9a1 1 0 1 0 2 0V4h-5zm-5.707 9.293L6 16.586V15a1 1 0 1 0-2 0v4.999h.996L9 20a1 1 0 0 0 0-2H7.414l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001zM7 12a1 1 0 0 0 1-1V8h3a1 1 0 1 0 0-2H6.001L6 11a1 1 0 0 0 1 1zm10 0a1 1 0 0 0-1 1v3h-3a1 1 0 1 0 0 2h5v-5a1 1 0 0 0-1-1z"}"></path></svg>`;
});
export {
  Component as default
};
