import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M10 4V0H3L0 3v9h6v4h10V4h-6zM3 1.414V3H1.414L3 1.414zM1 11V4h3V1h5v3L6 7v4H1zm8-5.586V7H7.414L9 5.414zM15 15H7V8h3V5h5v10z"}"></path></svg>`;
});
export {
  Component as default
};
