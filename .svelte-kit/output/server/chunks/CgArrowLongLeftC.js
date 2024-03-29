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
  )}><path fill-rule="${"evenodd"}" d="${"m5.27 7.757-4.25 4.236 4.236 4.25 1.416-1.412-1.814-1.82 12.288.042a3.001 3.001 0 0 0 5.834-.975 3 3 0 0 0-5.825-1.025L4.839 11.01l1.843-1.836L5.27 7.757Zm13.71 4.303a1 1 0 1 1 2 .009 1 1 0 0 1-2-.01Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
