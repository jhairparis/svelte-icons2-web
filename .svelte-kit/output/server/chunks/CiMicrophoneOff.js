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
  )}><path d="${"M16.5 7.046v4.72a.5.5 0 0 1-1 0v-1.82H14a.5.5 0 0 1 0-1h1.5v-2h-1.93a.5.5 0 0 1 0-1h1.87a3.23 3.23 0 0 0-.2-.72 3.533 3.533 0 0 0-6.16-.59c-.36.53-1.23.03-.87-.5a4.509 4.509 0 0 1 7.71.21 5.255 5.255 0 0 1 .58 2.7Zm3.64 12.39q-2.625-2.64-5.27-5.28-4.185-4.17-8.36-8.356c-.65-.64-1.3-1.29-1.94-1.94a.5.5 0 0 0-.71.71Q5.69 6.381 7.5 8.206v3.92a4.591 4.591 0 0 0 3.59 4.61 4.629 4.629 0 0 0 3.9-1.04c.24.24.48.47.71.71a5.252 5.252 0 0 1-6.62.67 5.2 5.2 0 0 1-2.05-2.76 7.608 7.608 0 0 1-.24-2.33v-2.2a.5.5 0 0 0-1 0 15.463 15.463 0 0 0 .34 4.99 6.276 6.276 0 0 0 5.37 4.17v1.99H8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-3.5v-2a6.118 6.118 0 0 0 3.91-1.82l1.08 1.08c.65.65 1.3 1.3 1.95 1.94a.5.5 0 0 0 .7-.7Zm-11.2-5.42a3.991 3.991 0 0 1-.44-2.03v-2.78l5.77 5.77a3.521 3.521 0 0 1-5.33-.96Z"}" data-name="${"Microphone Off"}"></path></svg>`;
});
export {
  Component as default
};