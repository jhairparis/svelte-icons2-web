import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#FFA000"}" d="${"M13.324 45.003 3.002 34.68 34.676 3.007 44.998 13.33z"}"></path><path fill="${"#9E6400"}" d="${"m22.803 24.188-4.666-4.666 1.414-1.414 4.666 4.666zm2.01-5.99-2.616-2.616 1.414-1.414 2.616 2.616zm5.991-2.01-4.666-4.666 1.414-1.414 4.666 4.666zm-.649-8.645 1.415-1.414 2.615 2.616-1.414 1.414zM8.81 34.198l-2.616-2.616 1.414-1.414 2.616 2.616zm5.991-2.01-4.666-4.666 1.414-1.414 4.666 4.666zm2.011-5.99-2.616-2.616 1.414-1.414 2.616 2.616z"}"></path></svg>`;
});
export {
  Component as default
};
