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
  )}><path d="${"M15 13v1H1.5l-.5-.5V0h1v13h13Z"}"></path><path d="${"M13 3.207 7.854 8.354h-.708L5.5 6.707l-3.646 3.647-.708-.708 4-4h.708L7.5 7.293l5.146-5.147h.707l2 2-.707.708L13 3.207Z"}"></path></svg>`;
});
export {
  Component as default
};
