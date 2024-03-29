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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M2 19h20v2H2v-2zm9-11h2v8h-2V8zM7.965 8h2.125l-2.986 7.964h-2L2.118 8h2.125l1.861 5.113L7.965 8zM17 14v2h-2V8h4a3 3 0 0 1 0 6h-2zm0-4v2h2a1 1 0 0 0 0-2h-2zM2 3h20v2H2V3z"}"></path></svg>`;
});
export {
  Component as default
};
