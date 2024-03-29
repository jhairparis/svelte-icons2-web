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
  )}><path fill="${"#2196F3"}" d="${"M16.8 40h-5.3l-1.1 3H6.9l5.7-15.2h2.9L21.1 43h-3.2l-1.1-3zm-4.6-2.7H16l-1.9-5.7-1.9 5.7zm.2-19.6H20v2.5H8.4v-1.9L16 7.5H8.4V5h11.4v1.7l-7.4 11z"}"></path><path fill="${"#546E7A"}" d="${"M38 33V5h-4v28h-6l8 10 8-10z"}"></path></svg>`;
});
export {
  Component as default
};
