import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#424242"}" d="${"M24 4c-5.5 0-10 4.5-10 10v4h4v-4c0-3.3 2.7-6 6-6s6 2.7 6 6h4c0-5.5-4.5-10-10-10z"}"></path><path fill="${"#FB8C00"}" d="${"M36 44H12c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"24"}" cy="${"31"}" r="${"3"}" fill="${"#C76E00"}"></circle></svg>`;
});
export {
  Component as default
};
