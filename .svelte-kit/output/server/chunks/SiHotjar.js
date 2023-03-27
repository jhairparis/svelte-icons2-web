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
  )}><path d="${"M21.055 7.814C17.512 1.404 7.118 0 7.118 0s4.798 5.34-1.334 9.567c-3.876 2.666-5.41 6.13-3.75 9.914 1.27 2.9 3.96 4.076 6.86 4.519-.745-1.434-.932-3.505-.381-5.628a8.51 8.51 0 0 1 .186-.636c.813 1.258 2.148 1.946 3.45 1.629 1.783-.424 2.829-2.582 2.342-4.799a5.104 5.104 0 0 0-.536-1.372c.07.017.14.024.212.047 2.225.635 3.301 3.962 2.403 7.434a9.266 9.266 0 0 1-1.325 2.946c3.82-1.23 6.36-4.311 7.06-7.056.736-2.856.177-6.185-1.25-8.751z"}"></path></svg>`;
});
export {
  Component as default
};