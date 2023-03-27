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
  )}><path d="${"M5.743 0C1.941 0 0 2.19 0 6.279v8.579l3.725-3.729V6.771c0-1.694.449-2.772 1.955-3.014.526-.103 1.621-.067 2.317-.067v2.587a.247.247 0 0 0 .245.269c.063 0 .123-.033.184-.093L14.881 0 5.742-.001zm6.532 4.871v4.358c0 1.694-.449 2.772-1.955 3.014-.526.103-1.621.067-2.317.067V9.723a.414.414 0 0 0-.009-.087.246.246 0 0 0-.236-.182c-.064 0-.123.033-.184.093L1.119 16l9.139.001c3.802 0 5.743-2.19 5.743-6.279V1.143l-3.725 3.729z"}"></path></svg>`;
});
export {
  Component as default
};