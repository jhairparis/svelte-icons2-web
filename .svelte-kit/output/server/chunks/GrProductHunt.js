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
  )}><path fill="${"#DA552F"}" fill-rule="${"evenodd"}" d="${"M13.6 8.4h-3.4V12h3.4a1.8 1.8 0 1 0 0-3.6m0 6h-3.4V18H7.8V6h5.8a4.2 4.2 0 1 1 0 8.4M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.627 0 12-5.372 12-12S18.627 0 12 0"}"></path></svg>`;
});
export {
  Component as default
};
