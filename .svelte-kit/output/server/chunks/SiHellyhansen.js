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
  )}><path d="${"M22.912 5.945a1.089 1.089 0 1 0-.002 2.178 1.089 1.089 0 0 0 .002-2.178zm.012.242a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7zm-.332.375v.952h.18v-.352h.171l.184.352h.207l-.213-.385c.046-.017.19-.067.19-.28 0-.166-.12-.287-.323-.287h-.396zm.18.157h.167c.124 0 .184.057.184.144 0 .089-.065.143-.156.143h-.196v-.287zM0 7.039v11.016h3.684v-3.78h3.523v3.78h1.42l2.15-11.016H7.221v3.854H3.695V7.039H0zm12.127 0L9.988 18.055h3.545V14.2h3.524v3.854h3.697V7.039H17.07v3.78h-3.525v-3.78h-1.418Z"}"></path></svg>`;
});
export {
  Component as default
};