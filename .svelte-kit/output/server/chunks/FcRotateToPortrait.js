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
  )}><path fill="${"#37474F"}" d="${"M41 38H7c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h34c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#F3E5F5"}" d="${"M6 14v20c0 .6.4 1 1 1h34c.6 0 1-.4 1-1V14c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1z"}"></path><path fill="${"#9C27B0"}" d="${"m26 15-5.9 7h11.8z"}"></path><path fill="${"#9C27B0"}" d="${"M24 21v6c0 1.1-.9 2-2 2s-2-.9-2-2v-2h-4v2c0 3.3 2.7 6 6 6s6-2.7 6-6v-6h-4z"}"></path></svg>`;
});
export {
  Component as default
};
