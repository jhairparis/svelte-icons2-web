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
  )}><path d="${"M15.879 4.879h-12v2h12v-2Zm0 4h-12v2h12v-2Zm-12 4h8v2h-8v-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M13.757 12.757a3 3 0 0 0 3.415 4.83l1.535 1.534 1.414-1.414-1.535-1.535a3.001 3.001 0 0 0-4.829-3.415Zm1.415 2.829a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.414 1.415Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
