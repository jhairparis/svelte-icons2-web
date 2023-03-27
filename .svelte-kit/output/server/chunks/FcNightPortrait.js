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
  )}><path fill="${"#40C4FF"}" d="${"M42.9 6.3C43.6 7.4 44 8.6 44 10c0 3.9-3.1 7-7 7-.7 0-1.3-.1-1.9-.3 1.2 2 3.4 3.3 5.9 3.3 3.9 0 7-3.1 7-7 0-3.2-2.1-5.9-5.1-6.7z"}"></path><g fill="${"#B39DDB"}"><circle cx="${"31"}" cy="${"19"}" r="${"2"}"></circle><circle cx="${"13"}" cy="${"19"}" r="${"2"}"></circle><path d="${"m22 37-5-6v-6h10v6z"}"></path></g><path fill="${"#D1C4E9"}" d="${"M31 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9v-7z"}"></path><g fill="${"#673AB7"}"><circle cx="${"26"}" cy="${"19"}" r="${"1"}"></circle><circle cx="${"18"}" cy="${"19"}" r="${"1"}"></circle><path d="${"M22 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2h-3zm5 27s-2 1-5 1-5-1-5-1S6 33 6 44h32c0-11-11-13-11-13z"}"></path></g></svg>`;
});
export {
  Component as default
};