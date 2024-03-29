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
  )}><path d="${"m5.033 14.828 1.415 1.415L10.69 12 6.448 7.757 5.033 9.172 7.862 12l-2.829 2.828ZM15 14h-4v2h4v-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M2 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm20 2H2v16h20V4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
