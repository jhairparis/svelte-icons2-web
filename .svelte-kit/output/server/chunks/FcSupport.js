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
  )}><path fill="${"#607D8B"}" d="${"M44.7 11 36 19.6s-2.6 0-5.2-2.6-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8.4-14.4 4-5.4 5.4-.6 12.3-2 13.7C12.9 28.7 5.1 34.7 4.9 35c-2.3 2.3-2.4 6-.2 8.2 2.2 2.2 5.9 2.1 8.2-.2.3-.3 6.7-8.4 14.2-15.9 1.4-1.4 8 3.7 13.6-1.8 3.5-3.6 5.2-9.4 4-14.3zM9.4 41.1c-1.4 0-2.5-1.1-2.5-2.5C6.9 37.1 8 36 9.4 36s2.5 1.1 2.5 2.5-1.1 2.6-2.5 2.6z"}"></path></svg>`;
});
export {
  Component as default
};
