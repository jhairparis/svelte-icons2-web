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
  )}><path d="${"M21.645 12.057a2.404 2.404 0 0 0-1.803.8l-.138-.054a17.801 17.801 0 0 0-2.867-.86 4.808 4.808 0 0 0-9.615 0H7.09a17.747 17.747 0 0 0-2.765.836l-.138.054a2.404 2.404 0 1 0 .559 1.07 16.599 16.599 0 0 1 2.578-.776 4.808 4.808 0 0 0 9.357 0 16.557 16.557 0 0 1 2.578.77 2.404 2.404 0 1 0 2.386-1.84zM2.414 15.663a1.202 1.202 0 1 1 1.202-1.202 1.202 1.202 0 0 1-1.202 1.202zm9.616 0a3.606 3.606 0 1 1 3.605-3.606 3.606 3.606 0 0 1-3.605 3.606zm9.615 0a1.202 1.202 0 1 1 1.202-1.202 1.202 1.202 0 0 1-1.202 1.202zm-7.812-3.606a1.803 1.803 0 1 1-1.803-1.803 1.803 1.803 0 0 1 1.803 1.803z"}"></path></svg>`;
});
export {
  Component as default
};