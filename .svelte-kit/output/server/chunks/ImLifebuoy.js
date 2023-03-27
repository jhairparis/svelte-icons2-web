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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm9.468 2.679-2.772-1.148C11.892 9.059 12 8.542 12 8s-.108-1.059-.304-1.531l2.772-1.148C14.81 6.146 15 7.051 15 8s-.189 1.854-.532 2.679zm-3.789-9.147L9.531 4.304C9.059 4.108 8.542 4 8 4s-1.059.108-1.531.304L5.321 1.532C6.146 1.19 7.051 1 8 1s1.854.189 2.679.532zM1.532 5.321l2.772 1.148C4.108 6.941 4 7.458 4 8s.108 1.059.304 1.531l-2.772 1.148C1.19 9.854 1 8.949 1 8s.189-1.854.532-2.679zm3.789 9.147 1.148-2.772c.472.196.989.304 1.531.304s1.059-.108 1.531-.304l1.148 2.772C9.854 14.81 8.949 15 8 15s-1.854-.189-2.679-.532z"}"></path></svg>`;
});
export {
  Component as default
};