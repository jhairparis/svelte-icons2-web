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
  )}><path d="${"M12 0C6.28 0 1.636 4.641 1.636 10.364c0 5.421 4.945 9.817 10.364 9.817V24c6.295-3.194 10.364-8.333 10.364-13.636C22.364 4.64 17.72 0 12 0zM7.5 6.272h6.817a1.363 1.363 0 0 1 1.365 1.365v1.704l2.728-2.727v7.501l-2.726-2.726v1.703a1.362 1.362 0 0 1-1.365 1.365H7.5c-.35 0-.698-.133-.965-.4a1.358 1.358 0 0 1-.4-.965V7.637A1.362 1.362 0 0 1 7.5 6.272Z"}"></path></svg>`;
});
export {
  Component as default
};