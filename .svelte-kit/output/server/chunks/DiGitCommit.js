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
  )}><path fill="${"#444"}" d="${"M22.161 14.689c-.711-2.75-3.188-4.791-6.161-4.791s-5.449 2.041-6.161 4.791H4.821v3.194h5.018c.712 2.751 3.19 4.791 6.161 4.791s5.45-2.04 6.161-4.791h5.019v-3.194h-5.019zM16 19.48c-1.763 0-3.194-1.432-3.194-3.194s1.431-3.194 3.194-3.194c1.762 0 3.194 1.431 3.194 3.194S17.762 19.48 16 19.48z"}"></path></svg>`;
});
export {
  Component as default
};
