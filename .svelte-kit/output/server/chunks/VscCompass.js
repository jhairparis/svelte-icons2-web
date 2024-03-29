import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m9.009 6.991 2.024 4.042L6.991 9.01 4.967 4.967 9.009 6.99Zm.426 2.444L8.481 7.52l-1.916-.955.954 1.917 1.916.954Z"}"></path><path fill-rule="${"evenodd"}" d="${"M13.98 8.5a6.002 6.002 0 0 1-5.48 5.48V13h-1v.98a6.001 6.001 0 0 1-5.482-5.518H3v-1h-.976A6.001 6.001 0 0 1 7.5 2.02V3h1v-.98a6.001 6.001 0 0 1 5.48 5.48H13v1h.98ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
