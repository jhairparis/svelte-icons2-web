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
  )}><path d="${"M0 2v13h17V2H0zm8.494 7.817L1.598 3h13.82L8.494 9.817zM5.755 8.516 1 13.198V3.815l4.755 4.701zm.711.703 2.026 2.003 1.996-1.966 4.8 4.744H1.611l4.855-4.781zm4.735-.664L16 3.83v9.467l-4.799-4.742z"}"></path></svg>`;
});
export {
  Component as default
};