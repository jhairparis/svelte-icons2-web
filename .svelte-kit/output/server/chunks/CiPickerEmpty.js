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
  )}><path d="${"M20.94 5.876a2.805 2.805 0 0 0-.84-2.01 2.856 2.856 0 0 0-3.97 0l-2.21 2.21-.75-.75a.8.8 0 0 0-1.1 0 .785.785 0 0 0 0 1.1l.75.75-8.77 8.76a3.248 3.248 0 0 0-.92 2.13l-.07 1.52a1.311 1.311 0 0 0 .38.97 1.332 1.332 0 0 0 .91.38h.06l1.52-.07a3.248 3.248 0 0 0 2.13-.92l8.76-8.77.75.75a.8.8 0 0 0 1.1 0 .785.785 0 0 0 0-1.1l-.75-.75L20.1 7.9a2.828 2.828 0 0 0 .84-2.024ZM7.35 19.236a2.22 2.22 0 0 1-1.46.63l-1.53.07a.243.243 0 0 1-.21-.09.3.3 0 0 1-.09-.21l.07-1.53a2.22 2.22 0 0 1 .63-1.46l8.77-8.76 2.59 2.59ZM19.4 7.2l-2.18 2.18-2.59-2.59 2.21-2.22a1.861 1.861 0 0 1 2.56 0 1.846 1.846 0 0 1 .54 1.31 1.869 1.869 0 0 1-.54 1.32Z"}" data-name="${"Picker Empty"}"></path></svg>`;
});
export {
  Component as default
};