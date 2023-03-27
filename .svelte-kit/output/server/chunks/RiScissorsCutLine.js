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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 6c0 .732-.197 1.419-.54 2.01L12 10.585l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414L10.586 12 8.032 9.446A4 4 0 1 1 10 6zM8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm13.556 14.142a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.415 6.73 6.731zM16 11h2v2h-2v-2zm4 0h2v2h-2v-2zM6 11h2v2H6v-2zm-4 0h2v2H2v-2zm4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}"></path></svg>`;
});
export {
  Component as default
};