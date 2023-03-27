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
  )}><path d="${"M12 0C5.37 0 0 5.37 0 12c0 6.09 4.53 11.11 10.4 11.9v-2.4a1.59 1.59 0 0 0-1.08-1.53A8.41 8.41 0 0 1 3.6 11.8a8.37 8.37 0 0 1 8.49-8.2 8.4 8.4 0 0 1 8.31 8.71l-.01.07a8.68 8.68 0 0 1-.03.38c0 .07-.01.14-.02.2 0 .08-.01.16-.02.23l-.02.1c-1.03 6.78-9.85 10.58-9.9 10.61.52.07 1.06.1 1.6.1 6.63 0 12-5.37 12-12S18.63 0 12 0Z"}"></path></svg>`;
});
export {
  Component as default
};