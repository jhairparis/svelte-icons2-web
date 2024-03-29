import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M375 16v199h18v-14h46v14h18V16h-18v39h-46V16h-18zm18 57h46v46h-46V73zm0 64h46v46h-46v-46zM25 233v46h462v-46H25zm30 64v199h18v-39h46v39h18V297h-18v14H73v-14H55zm18 32h46v46H73v-46zm0 64h46v46H73v-46z"}"></path></svg>`;
});
export {
  Component as default
};
