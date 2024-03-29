import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M11.8 1c-1.682 0-3.129 1.368-3.799 2.797C7.33 2.368 5.883 1 4.201 1a4.202 4.202 0 0 0-4.2 4.2c0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.05 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"}"></path></svg>`;
});
export {
  Component as default
};
