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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M21 7h-1V6h-2v1h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-1 9h-2V9h2v7zM8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h2v-5H3.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H10v5h2c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6z"}"></path></svg>`;
});
export {
  Component as default
};
