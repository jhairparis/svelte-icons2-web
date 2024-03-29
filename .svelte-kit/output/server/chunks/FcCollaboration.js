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
  )}><path fill="${"#1565C0"}" d="${"M25 22h13l6 6V11c0-2.2-1.8-4-4-4H25c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4z"}"></path><path fill="${"#2196F3"}" d="${"M23 19H10l-6 6V8c0-2.2 1.8-4 4-4h15c2.2 0 4 1.8 4 4v7c0 2.2-1.8 4-4 4z"}"></path><g fill="${"#FFA726"}"><circle cx="${"12"}" cy="${"31"}" r="${"5"}"></circle><circle cx="${"36"}" cy="${"31"}" r="${"5"}"></circle></g><path fill="${"#607D8B"}" d="${"M20 42s-2.2-4-8-4-8 4-8 4v2h16v-2zm24 0s-2.2-4-8-4-8 4-8 4v2h16v-2z"}"></path></svg>`;
});
export {
  Component as default
};
