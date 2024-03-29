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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16.5 13.202 13 15.535v3.596L19.197 15 16.5 13.202zM14.697 12 12 10.202 9.303 12 12 13.798 14.697 12zM20 10.869 18.303 12 20 13.131V10.87zM19.197 9 13 4.869v3.596l3.5 2.333L19.197 9zM7.5 10.798 11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15 11 19.131v-3.596l-3.5-2.333L4.803 15zM4 13.131 5.697 12 4 10.869v2.262zM2 9a1 1 0 0 1 .445-.832l9-6a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 22 9v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 2 15V9z"}"></path></svg>`;
});
export {
  Component as default
};
