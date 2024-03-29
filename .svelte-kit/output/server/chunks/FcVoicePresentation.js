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
  )}><path fill="${"#2196F3"}" d="${"M40 22h-8l-4 4V12c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"17"}" cy="${"19"}" r="${"8"}" fill="${"#FFA726"}"></circle><path fill="${"#607D8B"}" d="${"M30 36.7S26.4 30 17 30 4 36.7 4 36.7V40h26v-3.3z"}"></path></svg>`;
});
export {
  Component as default
};
