import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13 12h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm7-7H3a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2zm-2 3H5a1 1 0 0 0-1 1v8c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3V9a1 1 0 0 0-1-1zm-2 10H7c-.552 0-1-.449-1-1v-7h11v7c0 .551-.448 1-1 1z"}"></path></svg>`;
});
export {
  Component as default
};
