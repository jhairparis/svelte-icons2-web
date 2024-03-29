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
  )}><path fill="${"#BBDEFB"}" d="${"M4 7h40v34H4z"}"></path><path fill="${"#3F51B5"}" d="${"M9 12h30v5H9z"}"></path><path fill="${"#2196F3"}" d="${"M9 21h13v16H9zm17 0h13v16H26z"}"></path></svg>`;
});
export {
  Component as default
};
