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
  )}><path d="${"M9.001 7v3.659c0 .928-.012 1.463.086 1.727.098.262.342.534.609.691.354.212.758.318 1.214.318.81 0 1.289-.107 2.09-.633v2.405a9.089 9.089 0 0 1-1.833.639A7.93 7.93 0 0 1 9.369 16a4.9 4.9 0 0 1-1.725-.276 4.195 4.195 0 0 1-1.438-.79c-.398-.343-.672-.706-.826-1.091s-.23-.944-.23-1.676V6.556H3.003V4.29c.628-.204 1.331-.497 1.778-.877a4.386 4.386 0 0 0 1.08-1.374C6.133 1.505 6.32.825 6.422 0h2.579v4H13v3H9.001z"}"></path></svg>`;
});
export {
  Component as default
};