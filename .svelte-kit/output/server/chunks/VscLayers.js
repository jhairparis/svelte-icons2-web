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
  )}><path fill-rule="${"evenodd"}" d="${"m7.627 1.087.558-.004 6.091 4.037-.003.836L8.182 9.92l-.551-.004-5.91-3.963-.003-.828 5.91-4.037Zm.286 1.016-5.021 3.43 5.021 3.368 5.176-3.368-5.176-3.43ZM1.793 8.5l5.838 3.915.55.004L14.206 8.5h-1.833l-4.459 2.9-4.325-2.9H1.793Zm5.838 6.415L1.793 11h1.795l4.325 2.9 4.459-2.9h1.833l-6.023 3.92-.551-.005Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
