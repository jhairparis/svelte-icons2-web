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
  )}><path fill="${"#37474F"}" d="${"M34.9 29.1c-2.7-2.7-7.1-2.7-9.8 0l-4 4c-1.7 1.7-4.5 1.7-6.2 0-1.7-1.7-1.7-4.5 0-6.2l4.5-4.5-2.8-2.8-4.5 4.5c-3.3 3.3-3.3 8.6 0 11.8 3.3 3.3 8.6 3.3 11.8 0l4-4c1.2-1.1 3-1.1 4.2 0 1.1 1.2 1.1 3 0 4.2L27 41.2l2.8 2.8 5.1-5.1c2.7-2.7 2.7-7.1 0-9.8z"}"></path><path fill="${"#0277BD"}" d="${"M16.1 22.9c-2.8-2.8-2.8-7.3 0-10l6.8-6.8c2.8-2.8 7.3-2.8 10 0 2.8 2.8 2.8 7.3 0 10l-6.8 6.8c-2.8 2.8-7.2 2.8-10 0z"}"></path><circle cx="${"28"}" cy="${"11"}" r="${"4"}" fill="${"#B3E5FC"}"></circle></svg>`;
});
export {
  Component as default
};