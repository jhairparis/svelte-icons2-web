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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9H3.5a1 1 0 0 1-1-1V5.618a1 1 0 0 1 .553-.894L8.5 2H20zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2V4zm4 0h-2v3h2V4z"}"></path></svg>`;
});
export {
  Component as default
};
