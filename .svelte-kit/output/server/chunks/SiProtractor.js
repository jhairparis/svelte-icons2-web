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
  )}><path d="${"M12 0C5.37 0 0 5.372 0 12s5.371 12 12 12c6.628 0 12-5.372 12-12S18.627 0 12 0zm-.273 3.789v1.71h.545v-1.71a9.055 9.055 0 0 1 5.961 2.468l-1.277 1.278.386.386 1.277-1.278a9.057 9.057 0 0 1 2.469 5.96h-1.71v.546h1.717v2.001H2.905v-2H4.62v-.546H2.91a9.058 9.058 0 0 1 2.469-5.96L6.658 7.92l.386-.386-1.278-1.278a9.056 9.056 0 0 1 5.96-2.468zM12 6.965a5.912 5.912 0 0 0-5.913 5.912h11.824A5.91 5.91 0 0 0 12 6.965z"}"></path></svg>`;
});
export {
  Component as default
};
