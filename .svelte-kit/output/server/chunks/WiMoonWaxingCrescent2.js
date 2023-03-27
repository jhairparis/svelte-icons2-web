import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 30 30" },
      { viewBox: "0 0 30 30" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1 1.51-3.61 1.51-5.65-.5-3.92-1.51-5.65-2.37-3.09-4.09-4.09-3.61-1.51-5.65-1.51c1.1.59 2.07 1.32 2.89 2.19s1.47 1.82 1.95 2.83.83 2.03 1.05 3.07.34 2.09.34 3.16c0 .91-.04 1.76-.13 2.54s-.27 1.63-.53 2.53-.62 1.71-1.06 2.43-1.04 1.42-1.82 2.09-1.67 1.22-2.69 1.67z"}"></path></svg>`;
});
export {
  Component as default
};