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
  )}><path fill="${"#000"}" fill-rule="${"evenodd"}" d="${"M8 1a1 1 0 0 0-.928.629l-4 10a1 1 0 0 0 0 .742l4 10A1 1 0 0 0 8 23h10a1 1 0 0 0 .928-1.371L15.078 12l3.851-9.629A1 1 0 0 0 18 1H8ZM5.477 11l3.2-8h2.794a1 1 0 0 0 1 1h.057a1 1 0 0 0 1.001-1h2.994l-3.2 8H5.477Zm0 2 3.2 8h7.846l-3.2-8H5.477Zm5.558 6.773a1 1 0 0 1 .937-1.351h.056a1 1 0 1 1 0 2h-.056a1 1 0 0 1-.937-.649Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
