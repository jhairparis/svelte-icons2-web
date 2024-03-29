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
  )}><path fill="${"#455A64"}" d="${"M42 41H12c-2.2 0-4-1.8-4-4V17c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#78909C"}" d="${"M36 36H6c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"26"}" cy="${"22"}" r="${"10"}" fill="${"#455A64"}"></circle><circle cx="${"26"}" cy="${"22"}" r="${"7"}" fill="${"#42A5F5"}"></circle><path fill="${"#90CAF9"}" d="${"M29.7 19.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4.4.4 1 .3 1.4-.1 1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.3.4-.9 0-1.3z"}"></path><path fill="${"#ADD8FB"}" d="${"M6 12h6v3H6z"}"></path></svg>`;
});
export {
  Component as default
};
