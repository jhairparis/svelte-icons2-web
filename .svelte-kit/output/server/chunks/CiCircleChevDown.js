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
  )}><g data-name="${"Circle Chev Down"}"><path d="${"M12.35 13.85a.492.492 0 0 1-.7 0l-3-3a.495.495 0 0 1 .7-.7L12 12.79l2.65-2.64a.495.495 0 0 1 .7.7Z"}"></path><path d="${"M21.933 12A9.933 9.933 0 1 1 12 2.067 9.944 9.944 0 0 1 21.933 12ZM3.067 12A8.933 8.933 0 1 0 12 3.067 8.943 8.943 0 0 0 3.067 12Z"}"></path></g></svg>`;
});
export {
  Component as default
};