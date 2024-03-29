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
  )}><path d="${"M3 0v16h12V0H3zm6 4.005a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zM12 12H6v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1zM1 1h1.5v3H1V1zm0 4h1.5v3H1V5zm0 4h1.5v3H1V9zm0 4h1.5v3H1v-3z"}"></path></svg>`;
});
export {
  Component as default
};
