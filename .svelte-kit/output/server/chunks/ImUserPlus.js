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
  )}><path d="${"M6 11.5a5.508 5.508 0 0 1 3.594-5.159A4.574 4.574 0 0 0 10 4.5C10 2.015 10 0 7 0S4 2.015 4 4.5c0 1.548.898 3.095 2 3.716v.825C2.608 9.318 0 10.985 0 13h6.208A5.5 5.5 0 0 1 6 11.5z"}"></path><path d="${"M11.5 7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm2.5 5h-2v2h-1v-2H9v-1h2V9h1v2h2v1z"}"></path></svg>`;
});
export {
  Component as default
};
