import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M21.311 20.252a2.871 2.871 0 0 1-.884.123c-2.662 0-6.573-9.303-6.573-12.4 0-1.141.271-1.521.652-1.847-3.259.38-7.17 1.575-8.419 3.096-.271.38-.434.978-.434 1.738 0 4.835 5.16 15.806 8.8 15.806 1.684 0 4.523-2.77 6.859-6.517zM19.612 5.803c3.368 0 6.736.543 6.736 2.444 0 3.857-2.444 8.528-3.694 8.528-2.227 0-4.997-6.192-4.997-9.288 0-1.412.543-1.684 1.955-1.684z"}"></path></svg>`;
});
export {
  Component as default
};
