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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8 8l3 3m1 11a9.99 9.99 0 0 0 8.307-4.43A9.953 9.953 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12"}"></path></svg>`;
});
export {
  Component as default
};
