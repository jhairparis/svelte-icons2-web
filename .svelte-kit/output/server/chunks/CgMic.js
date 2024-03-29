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
  )}><path fill-rule="${"evenodd"}" d="${"M9 4a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0V4Zm4 0v8a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0Z"}" clip-rule="${"evenodd"}"></path><path d="${"M18 12a6.002 6.002 0 0 1-5 5.917V21h4v2H7v-2h4v-3.083A6.002 6.002 0 0 1 6 12V9h2v3a4 4 0 0 0 8 0V9h2v3Z"}"></path></svg>`;
});
export {
  Component as default
};
