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
  )}><path d="${"M256 491c45.5 0 82.103-36.28 82.103-81.369V287.137c75.067-7.697 131.17-25.567 144.231-47.293-23.768 14.965-77.012 26.755-144.23 32.165v-82.842a428.977 428.977 0 0 0-164.207-.001v82.843c-67.364-5.425-120.752-17.144-144.378-32.165 12.91 21.773 69.166 39.579 144.378 47.293v122.494c0 45.09 36.602 81.369 82.103 81.369zm0-30.11c-22.114 0-39.95-18.13-39.95-40.243s17.836-39.95 39.95-39.95 39.95 17.836 39.95 39.95S278.114 460.89 256 460.89zm0-89.3c-22.114 0-39.95-17.982-39.95-40.096s17.836-39.95 39.95-39.95 39.95 17.836 39.95 39.95S278.114 371.59 256 371.59zm0-89.3c-22.114 0-39.95-17.983-39.95-40.096s17.836-39.95 39.95-39.95 39.95 17.836 39.95 39.95S278.114 282.29 256 282.29zm235-64.037C472.271 106.368 374.216 21 256 21S39.729 106.368 21 218.253c29.32-20.157 63.87-36.574 102.078-48.175 14.675-50.15 35.79-91.437 61.1-118.675-16.18 29.055-29.654 67.658-39.51 112.8 34.855-8.622 72.283-13.365 111.332-13.365s76.477 4.743 111.331 13.365c-9.855-45.142-23.33-83.745-39.51-112.8 25.311 27.238 46.426 68.526 61.1 118.675 38.208 11.6 72.758 28.018 102.079 48.175z"}"></path></svg>`;
});
export {
  Component as default
};