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
  )}><path fill="${"#00BCD4"}" d="${"M24 30c-3.3 0-6-2.7-6-6s2.7-6 6-6V5C13.5 5 5 13.5 5 24s8.5 19 19 19c4.4 0 8.5-1.5 11.8-4.1l-8-10.2c-1.1.8-2.4 1.3-3.8 1.3z"}"></path><path fill="${"#448AFF"}" d="${"M30 24h13c0-10.5-8.5-19-19-19v13c3.3 0 6 2.7 6 6z"}"></path><path fill="${"#3F51B5"}" d="${"M43 24H30c0 1.9-.9 3.6-2.3 4.7l8 10.2C40.2 35.4 43 30 43 24z"}"></path></svg>`;
});
export {
  Component as default
};