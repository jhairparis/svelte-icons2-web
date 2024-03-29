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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 4v2h2V7H5zm0 4v2h2v-2H5zm0 4v2h14v-2H5zm4-4v2h2v-2H9zm0-4v2h2V7H9zm4 0v2h2V7h-2zm4 0v2h2V7h-2zm-4 4v2h2v-2h-2zm4 0v2h2v-2h-2z"}"></path></svg>`;
});
export {
  Component as default
};
