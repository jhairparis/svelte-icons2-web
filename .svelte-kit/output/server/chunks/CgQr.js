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
  )}><path fill-rule="${"evenodd"}" d="${"M9 3H3v6h2V5h4V3ZM3 21v-6h2v4h4v2H3ZM15 3v2h4v4h2V3h-6Zm4 12h2v6h-6v-2h4v-4ZM7 7h4v4H7V7Zm0 6h4v4H7v-4Zm10-6h-4v4h4V7Zm-4 6h4v4h-4v-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
