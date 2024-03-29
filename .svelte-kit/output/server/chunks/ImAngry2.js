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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1.001 5.946c.032-.741.706-1.234 1.275-1.518.543-.271 1.08-.407 1.102-.413a.5.5 0 1 1 .242.97c-.275.07-.602.189-.89.334A.998.998 0 0 1 9.998 7a1 1 0 0 1-1-1L9 5.946zM4.015 4.379a.5.5 0 0 1 .606-.364c.023.006.559.141 1.102.413.568.284 1.243.776 1.275 1.518L7 6a1 1 0 1 1-1.732-.681 4.638 4.638 0 0 0-.89-.334.5.5 0 0 1-.364-.606zm6.987 7.82C10.39 11.181 9.275 10.5 8 10.5s-2.389.681-3.002 1.699l-1.286-.772C4.586 9.973 6.179 9 8 9s3.414.973 4.288 2.427l-1.286.772z"}"></path></svg>`;
});
export {
  Component as default
};
