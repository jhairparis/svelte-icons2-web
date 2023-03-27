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
  )}><path d="${"M14.5 2h-13C.675 2 0 2.675 0 3.5v9c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5zm-13 1h13c.271 0 .5.229.5.5V5H1V3.5c0-.271.229-.5.5-.5zm13 10h-13a.507.507 0 0 1-.5-.5V8h14v4.5c0 .271-.229.5-.5.5zM2 10h1v2H2zm2 0h1v2H4zm2 0h1v2H6z"}"></path></svg>`;
});
export {
  Component as default
};