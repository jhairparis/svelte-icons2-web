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
  )}><path d="${"M6.5 14.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 14.5zM0 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 0 8zm13 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 13 8zM1.904 3.404a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001zm9.192 9.192a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001zm-9.192 0a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001zm9.192-9.192a1.5 1.5 0 1 1 3.001.001 1.5 1.5 0 0 1-3.001-.001z"}"></path></svg>`;
});
export {
  Component as default
};
