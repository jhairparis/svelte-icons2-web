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
  )}><path fill-rule="${"evenodd"}" d="${"M22 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h19ZM11 5H8.985v8h-1v6H12v-6h-1V5Zm7.015 14H22V5h-2.985v8h-1v6Zm-1-6h-1V5H14v8h-1v6h4.015v-6Zm-10.03 6v-6h-1V5H3v14h3.985Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
