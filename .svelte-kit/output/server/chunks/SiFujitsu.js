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
  )}><path d="${"M16.56 3c-2.41 0-4.52 1.24-5.88 2.97v3.79c1.82-5.05 5.88-4.68 5.88-4.68 2.94 0 5.28 2.3 5.28 5.12 0 2.84-2.34 5.13-5.28 5.13a5.32 5.32 0 0 1-3.72-1.5l-2.56-2.8a6.06 6.06 0 0 0-4.25-1.71C2.7 9.32 0 11.93 0 15.16 0 18.4 2.7 21 6.03 21c1.87 0 3.55-.81 4.65-2.11v-3.03c-1.8 3.43-4.65 3.06-4.65 3.06-2.13 0-3.86-1.68-3.86-3.76 0-2.06 1.73-3.74 3.86-3.74 1.06 0 2.02.42 2.72 1.08l2.56 2.81a7.5 7.5 0 0 0 5.25 2.12c4.11 0 7.44-3.24 7.44-7.23S20.67 3 16.56 3Z"}"></path></svg>`;
});
export {
  Component as default
};