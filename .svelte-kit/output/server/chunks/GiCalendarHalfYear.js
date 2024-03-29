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
  )}><path d="${"M25 57v30h62V57H25zm160 0v62h62V57h-62zm80 0v14h62V57h-62zm80 0v39h62V57h-62zm80 0v78h62V57h-62zM105 73v78h62V73h-62zm160 16v78h62V89h-62zM25 105v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v78h62v-78h-62zm160 16v78h62v-78h-62zM25 201v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v78h62v-78h-62zm160 16v78h62v-78h-62zM25 297v78h62v-78H25zm320 9v78h62v-78h-62zm-160 23v78h62v-78h-62zm240 16v78h62v-78h-62zm-320 16v94h62v-94h-62zm160 16v78h62v-78h-62zM25 393v78h62v-78H25zm320 9v69h62v-69h-62zm-160 23v46h62v-46h-62zm240 16v14h62v-14h-62z"}"></path></svg>`;
});
export {
  Component as default
};
