import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 2H0v4h1v11h15V6h1V2zm-2 14H2V6h13v10zm1-11H1V3h15v2zM6 11h5.016c1.103 0 2-.897 2-2s-.897-2-2-2H6c-1.103 0-2 .897-2 2s.897 2 2 2zm0-3h5.016a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
