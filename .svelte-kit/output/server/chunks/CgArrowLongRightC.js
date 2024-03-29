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
  )}><path fill-rule="${"evenodd"}" d="${"m18.73 7.757 4.25 4.236-4.236 4.25-1.416-1.412 1.814-1.82-12.288.042a3.001 3.001 0 1 1-.009-2l12.316-.043-1.843-1.836 1.412-1.417ZM5.02 12.06a1 1 0 1 0-2 .009 1 1 0 0 0 2-.01Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
