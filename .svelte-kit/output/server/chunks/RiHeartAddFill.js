import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243a6.001 6.001 0 0 1 .507 7.91 6 6 0 0 0-8.061 8.127l-.69.691-8.478-8.492a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228z"}"></path></svg>`;
});
export {
  Component as default
};
