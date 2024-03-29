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
  )}><g fill="${"#1565C0"}"><path d="${"M13 13c0-3.3 2.7-6 6-6h10c3.3 0 6 2.7 6 6h4c0-5.5-4.5-10-10-10H19C13.5 3 9 7.5 9 13v11.2h4V13z"}"></path><path d="${"m4.6 22 6.4 8.4 6.4-8.4z"}"></path></g><g fill="${"#1565C0"}"><path d="${"M35 35c0 3.3-2.7 6-6 6H19c-3.3 0-6-2.7-6-6H9c0 5.5 4.5 10 10 10h10c5.5 0 10-4.5 10-10V23h-4v12z"}"></path><path d="${"m30.6 26 6.4-8.4 6.4 8.4z"}"></path></g></svg>`;
});
export {
  Component as default
};
