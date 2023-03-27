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
  )}><path d="${"M23.977 6.417c-.105 2.338-1.74 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.41 0-2.578-1.294-3.553-3.881L5.322 11.4c-.72-2.584-1.488-3.878-2.312-3.878-.18 0-.806.378-1.881 1.132l-1.13-1.457A315.06 315.06 0 0 0 3.502 4.07C5.08 2.702 6.266 1.985 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.839.465 2.953.789 4.789.97 5.507.54 2.45 1.132 3.674 1.777 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.59 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.12-1.777.39C14.92 3.38 17.169 1.49 20.497 1.61c2.473.06 3.628 1.664 3.493 4.797z"}"></path></svg>`;
});
export {
  Component as default
};