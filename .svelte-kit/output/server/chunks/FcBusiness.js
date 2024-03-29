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
  )}><path fill="${"#263238"}" d="${"M11 44H9c-.6 0-1-.4-1-1v-2h4v2c0 .6-.4 1-1 1zm28 0h-2c-.6 0-1-.4-1-1v-2h4v2c0 .6-.4 1-1 1z"}"></path><path fill="${"#37474F"}" d="${"M27 7h-6c-1.7 0-3 1.3-3 3v3h2v-3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v3h2v-3c0-1.7-1.3-3-3-3z"}"></path><path fill="${"#78909C"}" d="${"M40 43H8c-2.2 0-4-1.8-4-4V15c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z"}"></path></svg>`;
});
export {
  Component as default
};
