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
  )}><path fill="${"#444"}" d="${"M22.325 12.138a2.167 2.167 0 0 0-.172-.188l-7.698-7.698a2.353 2.353 0 0 0-3.328 3.328l2.485 2.485a9.616 9.616 0 0 0-7.236 9.323c0 5.316 4.307 9.623 9.623 9.623s9.623-4.307 9.623-9.623a9.59 9.59 0 0 0-3.297-7.249zm-.196 8.673-5.56 5.56a1.712 1.712 0 0 1-2.42-2.421l2.639-2.639h-5.705a1.71 1.71 0 1 1 0-3.422h5.705l-2.639-2.639c-.667-.667-.667-1.753 0-2.421s1.754-.667 2.421 0l5.56 5.56a1.715 1.715 0 0 1 0 2.421z"}"></path></svg>`;
});
export {
  Component as default
};
