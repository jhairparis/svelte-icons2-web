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
  )}><path fill="${"#37474F"}" d="${"M10 41V7c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v34c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#BBDEFB"}" d="${"M34 6H14c-.6 0-1 .4-1 1v34c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1z"}"></path><g fill="${"#3F51B5"}"><path d="${"M29 30H19c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1z"}"></path><path d="${"M24 16c-2.2 0-4 1.8-4 4v3h2v-3c0-1.1.9-2 2-2s2 .9 2 2v3h2v-3c0-2.2-1.8-4-4-4z"}"></path></g></svg>`;
});
export {
  Component as default
};