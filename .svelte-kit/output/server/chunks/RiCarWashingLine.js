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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V12l2.417-4.029A2 2 0 0 1 6.132 7h11.736a2 2 0 0 1 1.715.971L22 12v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-7H4v5h16v-5zM4.332 12h15.336l-1.8-3H6.132l-1.8 3zM5.44 3.44 6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0 1.06-1.062 1.06 1.06a1.5 1.5 0 1 1-2.121 0zM6.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}"></path></svg>`;
});
export {
  Component as default
};
