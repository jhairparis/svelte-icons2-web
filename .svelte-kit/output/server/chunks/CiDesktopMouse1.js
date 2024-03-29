import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13.435 2.065h-2.87a6.5 6.5 0 0 0-6.5 6.5v6.87a6.5 6.5 0 0 0 6.5 6.5h2.87a6.5 6.5 0 0 0 6.5-6.5v-6.87a6.5 6.5 0 0 0-6.5-6.5Zm-8.37 6.5a5.51 5.51 0 0 1 5.5-5.5h.94v6.44h-6.44Zm13.87 6.87a5.5 5.5 0 0 1-5.5 5.5h-2.87a5.5 5.5 0 0 1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43v-6.44h.93a5.5 5.5 0 0 1 5.5 5.5Z"}" data-name="${"Desktop Mouse 1"}"></path></svg>`;
});
export {
  Component as default
};
