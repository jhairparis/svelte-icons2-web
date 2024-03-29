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
  )}><path d="${"M6 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-6 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm12 5V8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1.5l4 2.5V7l-4 2.5zM10 12H2V9h8v3z"}"></path></svg>`;
});
export {
  Component as default
};
