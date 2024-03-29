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
  )}><path fill-rule="${"evenodd"}" d="${"M8 4h8v2H8V4Zm10 2h4v12h-4v4H6v-4H2V6h4V2h12v4Zm2 10h-2v-2H6v2H4V8h16v8ZM8 16h8v4H8v-4Zm0-6H6v2h2v-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
