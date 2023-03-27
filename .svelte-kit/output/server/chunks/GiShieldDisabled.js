import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M486 68.125 68.125 486 26 443.875 443.875 26zM256 21.608S185.506 66.896 81.857 66.896V292.55a148.335 148.335 0 0 0 11.67 57.573L380.845 62.806C311.185 51.67 256 21.608 256 21.608zm0 468.784s174.143-65.928 174.143-197.84V150.206L152.618 427.732C200.838 469.51 256 490.392 256 490.392z"}"></path></svg>`;
});
export {
  Component as default
};