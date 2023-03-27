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
  )}><path d="${"M13.657 2.343C12.146.832 10.137 0 8 0S3.854.832 2.343 2.343C.832 3.854 0 5.863 0 8s.832 4.146 2.343 5.657C3.854 15.168 5.863 16 8 16s4.146-.832 5.657-2.343C15.168 12.146 16 10.137 16 8s-.832-4.146-2.343-5.657zM14 8a5.97 5.97 0 0 1-1.111 3.475L4.525 3.111A5.97 5.97 0 0 1 8 2c3.308 0 6 2.692 6 6zM2 8a5.97 5.97 0 0 1 1.111-3.475l8.364 8.364A5.97 5.97 0 0 1 8 14c-3.308 0-6-2.692-6-6z"}"></path></svg>`;
});
export {
  Component as default
};