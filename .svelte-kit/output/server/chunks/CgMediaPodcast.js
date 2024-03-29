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
  )}><path d="${"M5.636 20.364a9 9 0 1 1 12.728 0l1.414 1.414A10.966 10.966 0 0 0 23 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 3.038 1.231 5.788 3.222 7.778l1.414-1.414Z"}"></path><path d="${"M16.95 18.95a7 7 0 1 0-9.9 0l1.415-1.414a5 5 0 1 1 7.071 0l1.414 1.414Z"}"></path><path d="${"M14.121 16.121a3 3 0 1 0-4.243 0l1.415-1.414a1 1 0 1 1 1.414 0l1.414 1.414Z"}"></path></svg>`;
});
export {
  Component as default
};
