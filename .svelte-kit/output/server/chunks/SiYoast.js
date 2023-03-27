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
  )}><path d="${"M15.864 0 14.55 3.652H5.422A3.592 3.592 0 0 0 1.84 7.233v9.529a3.592 3.592 0 0 0 3.582 3.581h1.495a4.9 4.9 0 0 1-.18.029l-.34.047V24h.391c2.76 0 4.442-1.385 5.706-3.657h9.666V7.233a3.593 3.593 0 0 0-3.253-3.565L20.275 0zm.556.778h2.738l-6.055 16.22c-1.55 4.335-3.186 6.064-5.924 6.21v-2.12c1.767-.354 2.418-1.461 2.785-2.408a3.902 3.902 0 0 0 0-2.828L6.43 6.772h2.488l2.512 7.86z"}"></path></svg>`;
});
export {
  Component as default
};