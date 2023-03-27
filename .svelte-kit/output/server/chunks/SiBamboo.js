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
  )}><path d="${"M21.714 13.643h-4.989a.651.651 0 0 0-.655.555 4.114 4.114 0 0 1-4.062 3.53l1.35 6.173a10.374 10.374 0 0 0 9.008-9.545.651.651 0 0 0-.652-.713zm-8.632-.158 7.2-6.171a.645.645 0 0 0 0-.984l-7.2-6.17a.648.648 0 0 0-1.075.483v12.342a.651.651 0 0 0 1.074.5zM1.727 14.99A10.385 10.385 0 0 0 12.01 24v-6.27a4.093 4.093 0 0 1-4.1-4.087zm-.096-1.447v.1h6.28a4.093 4.093 0 0 1 4.098-4.088l-1.348-6.17a10.37 10.37 0 0 0-9.03 10.158"}"></path></svg>`;
});
export {
  Component as default
};