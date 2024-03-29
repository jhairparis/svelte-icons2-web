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
  )}><path fill-rule="${"evenodd"}" d="${"m22.986 11.993-4.235 4.25-1.417-1.412 1.815-1.82-12.118.04.01 2-6 .027-.028-6 6-.027.01 2 12.144-.04-1.842-1.837 1.412-1.417 4.25 4.236Zm-19.964-.924.01 2 2-.01-.01-2-2 .01Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
