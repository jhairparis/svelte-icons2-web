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
  )}><path d="${"M238 16a12 12 0 0 0-12 12v50.5C140.87 92.783 76 166.81 76 256s64.87 163.217 150 177.5V484a12 12 0 0 0 12 12h36a12 12 0 0 0 12-12v-50.5c85.13-14.283 150-88.31 150-177.5S371.13 92.783 286 78.5V28a12 12 0 0 0-12-12h-36zm-12 155.125V199a12 12 0 0 0 12 12h36a12 12 0 0 0 12-12v-27.875c34.955 12.356 60 45.69 60 84.875 0 39.186-25.045 72.52-60 84.875V313a12 12 0 0 0-12-12h-36a12 12 0 0 0-12 12v27.875c-34.955-12.356-60-45.69-60-84.875 0-39.186 25.045-72.52 60-84.875z"}"></path></svg>`;
});
export {
  Component as default
};
