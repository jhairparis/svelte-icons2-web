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
  )}><path d="${"M15.306 6.992A6 6 0 1 0 15.318 17H12v-1h4.472a6.01 6.01 0 0 0 1.19-2.008H12v-1h5.918a6.038 6.038 0 0 0 .003-1.966H12v-1h5.668a5.996 5.996 0 0 0-1.203-2.034H12v-1h3.306Z"}"></path><path fill-rule="${"evenodd"}" d="${"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
