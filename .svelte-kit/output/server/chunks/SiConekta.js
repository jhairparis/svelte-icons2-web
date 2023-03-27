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
  )}><path d="${"M12.291 17.883a11.733 11.733 0 0 1-6.174 3.034 2.46 2.46 0 0 1-2.165-.746 12.094 12.094 0 0 1 0-16.358 2.46 2.46 0 0 1 2.173-.746 11.668 11.668 0 0 1 6.29 3.14 27.166 27.166 0 0 0-.698 6.1 27.776 27.776 0 0 0 .574 5.576zm9.897-3.938a1.394 1.394 0 0 0-1.525.527A24.68 24.68 0 0 1 8.75 23.41a35.442 35.442 0 0 0 6.429.59 36.286 36.286 0 0 0 4.46-.279 3.6 3.6 0 0 0 3.034-2.698c.47-1.884.645-3.883.517-5.813a1.394 1.394 0 0 0-1.001-1.265zM20.663 9.61a1.394 1.394 0 0 0 2.526-.746 19.188 19.188 0 0 0-.517-5.888A3.6 3.6 0 0 0 19.638.28a36.268 36.268 0 0 0-4.46-.28 35.434 35.434 0 0 0-6.429.59 24.64 24.64 0 0 1 11.914 9.02z"}"></path></svg>`;
});
export {
  Component as default
};