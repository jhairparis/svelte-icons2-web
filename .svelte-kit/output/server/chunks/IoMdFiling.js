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
  )}><path d="${"M449.2 208H423v-32l-14.4-48H383V96l-15-48H144l-15 48v32h-25.6L89 176v32H62.8L48 256v165.3c0 23.5 35.2 42.7 58.7 42.7h314.7c21.8 0 42.7-19.7 42.7-41V256l-14.9-48zM176 96h160v32H176V96zm-41 80h242v32H135v-32zm282 112h-82.6c-7.4 36.5-39.7 64-78.4 64s-71-27.5-78.4-64H95v-32h322v32z"}"></path></svg>`;
});
export {
  Component as default
};
