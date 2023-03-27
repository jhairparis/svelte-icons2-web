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
  )}><path d="${"M15.01 25.71c2.04 0 3.92-.5 5.65-1.51s3.09-2.37 4.09-4.1 1.51-3.61 1.51-5.65-.5-3.92-1.51-5.65-2.37-3.09-4.09-4.09-3.61-1.51-5.65-1.51c1.71 1.26 2.97 2.9 3.78 4.91S20 12.24 20 14.44c0 .9-.03 1.73-.1 2.5s-.21 1.59-.43 2.47-.51 1.68-.86 2.4-.83 1.42-1.45 2.12-1.33 1.28-2.15 1.78z"}"></path></svg>`;
});
export {
  Component as default
};