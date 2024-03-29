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
  )}><path d="${"M151 32v247h18V32h-18zm247 9.574-13.428 7.59c-31.626 17.876-61.492 12.267-93.138 4.356-31.647-7.912-64.83-18.84-97.946-4.807L188 51.039v115.549l12.512-5.3c25.883-10.968 54.201-2.396 86.554 5.692 32.354 8.089 68.988 14.98 106.362-6.144l4.572-2.584V41.574zM73 297v67.271l32 32V487h302v-90.729l32-32V297h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39H73z"}"></path></svg>`;
});
export {
  Component as default
};
