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
  )}><path d="${"M18.09 14.696a6.574 6.574 0 0 0-3.381 3.399l4.27.883-.886-4.282h-.003zM2.475 8.317 0 5.85A11.26 11.26 0 0 1 5.823 0h.006l2.469 2.463a11.224 11.224 0 0 1 4.463-.921C18.967 1.542 24 6.569 24 12.771 24 18.973 18.967 24 12.761 24 6.551 24 1.52 18.976 1.52 12.771c0-1.591.355-3.081.952-4.451l9.143 9.114a11.267 11.267 0 0 1 5.823-5.85l-9.135-9.12h-.008a11.285 11.285 0 0 0-5.823 5.85l.003.003z"}"></path></svg>`;
});
export {
  Component as default
};