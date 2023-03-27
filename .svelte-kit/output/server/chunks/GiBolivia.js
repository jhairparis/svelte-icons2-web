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
  )}><path d="${"M43.896 68.829c29.684-4.985 63.931-12.904 148.312-53.051l32.89 102.214L369.21 161.28l7.59 96.475 61.805 3.512 29.498 72.34-25.284 58.996c-32.53-13.45-59.839-33.256-121.503-11.238-16.164 19.127-23.681 57.278-33.712 89.899-76.82-14.398-136.704-9.87-168.56 25.986L50.92 293.575c10.326-68.28 10.417-141.922-7.023-224.746z"}"></path></svg>`;
});
export {
  Component as default
};