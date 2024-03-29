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
  )}><circle cx="${"24"}" cy="${"11"}" r="${"6"}" fill="${"#FFB74D"}"></circle><path fill="${"#607D8B"}" d="${"M36 26.1S32.7 19 24 19s-12 7.1-12 7.1V30h24v-3.9z"}"></path><path fill="${"#B0BEC5"}" d="${"M41 25H7l-1 4 5 3-2-3h30l-2 3 5-3z"}"></path><path fill="${"#78909C"}" d="${"M9 29h30l-4 12H13z"}"></path></svg>`;
});
export {
  Component as default
};
