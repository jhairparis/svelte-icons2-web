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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 0 1 10.93-4.756L6 6l-2.756 6.43A6.476 6.476 0 0 1 1.5 8zm7.643 1.143-4.001 1.715 1.715-4.001 2.286 2.286zM8 14.5a6.476 6.476 0 0 1-4.43-1.744L10 10l2.756-6.43A6.5 6.5 0 0 1 8 14.5z"}"></path></svg>`;
});
export {
  Component as default
};
