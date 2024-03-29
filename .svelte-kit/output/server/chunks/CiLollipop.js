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
  )}><path d="${"M18 6.565h-.19a6 6 0 0 0-11.62 0H6a1.5 1.5 0 1 0 0 3h.19a5.992 5.992 0 0 0 5.31 4.48v7.39a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-7.39a6.013 6.013 0 0 0 5.31-4.48H18a1.5 1.5 0 1 0 0-3Zm-6-3.5a4.991 4.991 0 0 1 4.77 3.5H7.23a4.991 4.991 0 0 1 4.77-3.5Zm0 10a4.991 4.991 0 0 1-4.77-3.5h9.54a4.991 4.991 0 0 1-4.77 3.5Zm6-4.5H6a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5.508.508 0 0 1-.5.5Z"}"></path></svg>`;
});
export {
  Component as default
};
