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
  )}><path fill="${"#444"}" d="${"m4.665 3.411 2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172H4.664zm4.286 5.5-.068-.763h7.107v2.842h-4.005l.259 2.911h3.746v2.842H9.649L8.951 8.91zm13.567 5.754-.667 7.483-.043.48-5.822 1.616-5.814-1.616-.398-4.463h2.849l.202 2.267 3.163.854 3.165-.856.329-3.686h-3.485v-2.842h6.587l-.069.763zm.514-5.754-.129 1.441-.057.639H16V8.149h7.1l-.068.762z"}"></path></svg>`;
});
export {
  Component as default
};
