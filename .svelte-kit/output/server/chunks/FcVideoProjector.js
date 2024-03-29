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
  )}><path fill="${"#546E7A"}" d="${"M5 34h6v3H5zm32 0h6v3h-6z"}"></path><path fill="${"#78909C"}" d="${"M44 35H4c-2.2 0-4-1.8-4-4V17c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#37474F"}" d="${"M5 19h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9zm4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"}"></path><circle cx="${"37"}" cy="${"24"}" r="${"8"}" fill="${"#37474F"}"></circle><circle cx="${"37"}" cy="${"24"}" r="${"6"}" fill="${"#a0f"}"></circle><path fill="${"#EA80FC"}" d="${"M40.7 21.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4.4.4 1 .3 1.4-.1 1.2-1.3 3.3-1.3 4.5 0 .2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.3.4-.9 0-1.3z"}"></path></svg>`;
});
export {
  Component as default
};
