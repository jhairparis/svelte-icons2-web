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
  )}><path d="${"M6 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z"}"></path><path fill-rule="${"evenodd"}" d="${"M13 21.5a6.002 6.002 0 0 0 5.917-5H19a4 4 0 0 0 0-8v-1H1v8a6 6 0 0 0 6 6h6ZM3 9.5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6H3Zm18 3a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2Z"}" clip-rule="${"evenodd"}"></path><path d="${"M9 3.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z"}"></path></svg>`;
});
export {
  Component as default
};
