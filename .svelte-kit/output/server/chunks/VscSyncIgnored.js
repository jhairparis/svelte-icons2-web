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
  )}><path fill-rule="${"evenodd"}" d="${"m5.468 3.687-.757-.706a6 6 0 0 1 9.285 4.799L15.19 6.6l.75.76-2.09 2.07-.76-.01L11 7.31l.76-.76 1.236 1.25a5 5 0 0 0-7.528-4.113zm4.55 8.889.784.73a6 6 0 0 1-8.796-5.04L.78 9.5 0 8.73l2.09-2.07.76.01 2.09 2.12-.76.76-1.167-1.18a5 5 0 0 0 7.005 4.206z"}" clip-rule="${"evenodd"}"></path><path d="${"m1.123 2.949.682-.732L13.72 13.328l-.682.732z"}"></path></svg>`;
});
export {
  Component as default
};
