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
  )}><path d="${"M256 17.338 213.543 180.08 59.836 111.807l100.766 134.662-149.215 77.605 168.11 5.178-32.36 165.047L256 366.096l108.863 128.203-32.36-165.047 168.11-5.178-149.215-77.605 100.766-134.662-153.707 68.273zm0 76.096 22.96 100.597L256 205.09l-22.96-11.059zm-136.668 65.82 92.967 44.77-5.672 24.841-22.963 11.059zm273.336 0-64.332 80.67-22.963-11.057-5.672-24.844zm-163.738 52.78 6.326 3.046-7.889 3.799zm54.14 0 1.563 6.845-7.889-3.799zM256 225.067l33.756 16.256 8.336 36.526-23.36 29.29h-37.464l-23.36-29.29 8.336-36.526zm-54.496 26.245-1.95 8.537-4.378-5.49zm108.992 0 6.328 3.046-4.379 5.49zm-131.953 11.056 15.889 19.926-5.67 24.846H85.574zm154.914 0 92.969 44.772H323.238l-5.67-24.846zm-124.67 37.926 5.46 6.846h-7.024zm94.426 0 1.564 6.846h-7.023zM203.115 325.14h25.487l15.888 19.923-64.336 80.674zm48.506 0h8.758L256 330.63zm31.78 0h25.484l22.96 100.597-64.333-80.674z"}"></path></svg>`;
});
export {
  Component as default
};