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
  )}><path fill-rule="${"evenodd"}" d="${"M16.497 5.03c0 .048-.001.096-.004.143A3.001 3.001 0 0 1 18.5 8.005v1h1v4h-1v3a3 3 0 0 1-2.005 2.83 3 3 0 0 1-2.995 3.17h-4a3 3 0 0 1-2.995-3.17 3.001 3.001 0 0 1-2.005-2.83v-8a3 3 0 0 1 2.003-2.83 3 3 0 0 1 3.01-3.18l4 .02a3 3 0 0 1 2.984 3.015Zm-8-.025h6a1 1 0 0 0-.995-.99l-4-.02a1 1 0 0 0-1.004.995v.015Zm7.208 2.021-4.22-.021H7.5a1 1 0 0 0-1 1v8a1 1 0 0 0 .999 1H15.5a1 1 0 0 0 .999-1v-8a1 1 0 0 0-.795-.979ZM8.5 19.005a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h-6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
