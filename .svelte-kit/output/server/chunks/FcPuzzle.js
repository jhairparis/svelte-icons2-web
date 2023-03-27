import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#8BC34A"}" d="${"M39 15c0-2.2-1.8-4-4-4h-6c-.7 0-1.1-.8-.7-1.4.6-1 .9-2.2.6-3.5-.4-2-1.9-3.6-3.8-4C21.8 1.4 19 3.9 19 7c0 1 .3 1.8.7 2.6.4.6 0 1.4-.8 1.4h-6c-2.2 0-4 1.8-4 4v7c0 .7.8 1.1 1.4.7 1-.6 2.2-.9 3.5-.6 2 .4 3.6 1.9 4 3.8.7 3.2-1.8 6.1-4.9 6.1-1 0-1.8-.3-2.6-.7-.5-.4-1.3 0-1.3.7v6c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V15z"}"></path></svg>`;
});
export {
  Component as default
};