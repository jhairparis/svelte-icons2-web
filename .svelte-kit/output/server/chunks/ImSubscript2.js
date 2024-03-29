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
  )}><path d="${"m3.032 13 .9-3h4.137l.9 3h1.775l-3-10H4.256l-3 10h1.776zm2.4-8h1.137l.9 3H4.532l.9-3zM16 3l-2.5 4L11 3h5zm-2.5 10h-1a.5.5 0 0 1 0-1h2a.5.5 0 0 0 0-1h-2a1.502 1.502 0 0 0-1.117 2.5c.275.307.674.5 1.117.5h1a.5.5 0 0 1 0 1h-2a.5.5 0 0 0 0 1h2a1.502 1.502 0 0 0 1.117-2.5A1.496 1.496 0 0 0 13.5 13z"}"></path></svg>`;
});
export {
  Component as default
};
