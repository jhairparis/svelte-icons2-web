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
  )}><path fill-rule="${"evenodd"}" d="${"M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm15-1h2a1 1 0 0 1 1 1v1h-3V7Zm-2 0h-2v2h2V7Zm-4 0H9v2h2V7ZM7 7H5a1 1 0 0 0-1 1v1h3V7Zm-3 4v2h3v-2H4Zm0 4v1a1 1 0 0 0 1 1h2v-2H4Zm5 2h2v-2H9v2Zm4 0h2v-2h-2v2Zm4 0h2a1 1 0 0 0 1-1v-1h-3v2Zm3-4v-2h-3v2h3Zm-9 0H9v-2h2v2Zm4 0h-2v-2h2v2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
