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
  )}><path fill="${"#444"}" d="${"M27.028 25.367a1.953 1.953 0 0 1-1.947 1.947H6.918a1.953 1.953 0 0 1-1.947-1.947V7.204c0-1.071.876-1.947 1.947-1.947h18.163c1.071 0 1.947.876 1.947 1.947v18.163zm0-13.18-1.992-1.342a2.344 2.344 0 1 0-4.184.828l-4.307 6.586a2.333 2.333 0 0 0-2.059.488l-2.883-1.659c.015-.106.025-.213.025-.323a2.344 2.344 0 1 0-4.506.906l-2.153 1.997v2.125l3.198-2.967a2.334 2.334 0 0 0 2.717-.354l2.813 1.619a2.343 2.343 0 1 0 4.155-.986l4.277-6.54a2.332 2.332 0 0 0 2.065-.409l2.833 1.909v-1.878z"}"></path></svg>`;
});
export {
  Component as default
};
