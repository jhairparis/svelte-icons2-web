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
  )}><path d="${"M20.437 4.064H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1Zm0 5.624h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1Zm0 5.624h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1Zm0 5.624H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1ZM7.91 11.65a.492.492 0 0 1 0 .7l-2 2a.495.495 0 0 1-.7-.7l1.15-1.15H3.54a.5.5 0 0 1 0-1h2.81c-.38-.38-.76-.76-1.14-1.15a.495.495 0 0 1 .7-.7Z"}"></path></svg>`;
});
export {
  Component as default
};