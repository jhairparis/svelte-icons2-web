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
  )}><path d="${"M256 176c-44.004 0-80.001 36-80.001 80 0 44.004 35.997 80 80.001 80 44.005 0 79.999-35.996 79.999-80 0-44-35.994-80-79.999-80zm190.938 58.667c-9.605-88.531-81.074-160-169.605-169.599V32h-42.666v33.067c-88.531 9.599-160 81.068-169.604 169.599H32v42.667h33.062c9.604 88.531 81.072 160 169.604 169.604V480h42.666v-33.062c88.531-9.604 160-81.073 169.605-169.604H480v-42.667h-33.062zM256 405.333c-82.137 0-149.334-67.198-149.334-149.333 0-82.136 67.197-149.333 149.334-149.333 82.135 0 149.332 67.198 149.332 149.333S338.135 405.333 256 405.333z"}"></path></svg>`;
});
export {
  Component as default
};