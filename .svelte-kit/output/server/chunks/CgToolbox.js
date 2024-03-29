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
  )}><path fill-rule="${"evenodd"}" d="${"M17 5.5h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3Zm-3-1h-4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1Zm6 3H4v2h16v-2Zm-16 12v-8h3v2h4v-2h2v2h4v-2h3v8H4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
