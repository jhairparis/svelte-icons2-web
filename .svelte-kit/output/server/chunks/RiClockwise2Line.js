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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10.586 4 8.757 2.172 10.172.757 14.414 5l-4.242 4.243-1.415-1.415L10.586 6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5h2.586zM9 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11zm2 1v8h8v-8h-8z"}"></path></svg>`;
});
export {
  Component as default
};
