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
  )}><path d="${"M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5Zm1.5 15.38a1.511 1.511 0 0 1-1.5 1.5H5.56a1.511 1.511 0 0 1-1.5-1.5V5.56a1.511 1.511 0 0 1 1.5-1.5h12.88a1.511 1.511 0 0 1 1.5 1.5Z"}"></path><path d="${"M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z"}"></path><circle cx="${"7.376"}" cy="${"6.744"}" r="${"1"}"></circle><path d="${"M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1 .94.94 0 0 1 .84.47 3.609 3.609 0 0 1 5.39 3.15Z"}"></path></svg>`;
});
export {
  Component as default
};