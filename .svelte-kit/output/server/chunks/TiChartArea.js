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
  )}><path d="${"M20 6a2 2 0 0 0-3.562-1.25l-2.789 3.486L11.2 6.4a2 2 0 0 0-2.762.351l-4 5A1.998 1.998 0 0 0 4 13v3h16V6zm0 13H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
