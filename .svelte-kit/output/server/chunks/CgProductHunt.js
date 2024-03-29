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
  )}><path fill-rule="${"evenodd"}" d="${"M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm-9-7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm6 4V8h4a3 3 0 1 1 0 6h-2v2H9Zm5-5a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
