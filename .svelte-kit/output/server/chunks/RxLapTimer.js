import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M5.5.5A.5.5 0 0 1 6 0h3a.5.5 0 0 1 0 1H8v1.12a6.363 6.363 0 0 1 2.992 1.016.638.638 0 0 1 .066-.078l1-1a.625.625 0 0 1 .884.884l-.975.975A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 0 1-.5-.5Zm-3.4 8a5.4 5.4 0 1 1 10.8 0 5.4 5.4 0 0 1-10.8 0Zm5.4 0V4.1a4.4 4.4 0 1 0 3.111 7.511L7.5 8.5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
