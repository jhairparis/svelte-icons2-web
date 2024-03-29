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
  )}><path d="${"M13.313 0H2.688A2.696 2.696 0 0 0 0 2.688v10.625a2.696 2.696 0 0 0 2.688 2.688h10.625a2.696 2.696 0 0 0 2.688-2.688V2.688A2.696 2.696 0 0 0 13.313 0zM8 5c-.551 0-1 .449-1 1v4c0 1.654-1.346 3-3 3s-3-1.346-3-3V8h2v2c0 .551.449 1 1 1s1-.449 1-1V6c0-1.654 1.346-3 3-3s3 1.346 3 2.781v.969l-1.281.375L9 6.75v-.969C9 5.448 8.551 5 8 5zm7 5c0 1.654-1.346 3-3 3s-3-1.346-3-3.219V7.843l.719.375L11 7.843v1.938c0 .77.449 1.219 1 1.219s1-.449 1-1V8h2v2z"}"></path></svg>`;
});
export {
  Component as default
};
