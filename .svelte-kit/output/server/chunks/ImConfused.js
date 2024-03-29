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
  )}><path d="${"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1.345 5h1.014a2.505 2.505 0 0 1-1.624 2.665 2.502 2.502 0 0 1-3.204-1.494 1.502 1.502 0 0 0-1.923-.896A1.502 1.502 0 0 0 4.655 12H3.642a2.505 2.505 0 0 1 1.624-2.665 2.502 2.502 0 0 1 3.204 1.494 1.502 1.502 0 0 0 1.923.896A1.502 1.502 0 0 0 11.346 10z"}"></path></svg>`;
});
export {
  Component as default
};
