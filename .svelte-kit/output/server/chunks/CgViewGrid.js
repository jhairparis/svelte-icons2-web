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
  )}><path fill-rule="${"evenodd"}" d="${"M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5Zm3 2H5a1 1 0 0 0-1 1v1h4V7Zm2 0v2h4V7h-4Zm6 0v2h4V8a1 1 0 0 0-1-1h-3Zm-2 4h-4v2h4v-2Zm2 2v-2h4v2h-4Zm-2 2h-4v2h4v-2Zm2 2v-2h4v1a1 1 0 0 1-1 1h-3Zm-8 0v-2H4v1a1 1 0 0 0 1 1h3Zm0-4v-2H4v2h4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
