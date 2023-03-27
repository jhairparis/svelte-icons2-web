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
  )}><path d="${"M18.313 17.78v62.095L170.22 231.75 43 211.625s64.877 30.418 116.344 54.438l-47.375 23.25L279.687 355a193.69 193.69 0 0 1-10.594-9.813c-39.543-39.54-54.888-88.3-34.28-108.906 20.605-20.604 69.362-5.26 108.905 34.282a194.547 194.547 0 0 1 9.53 10.22L288.31 112.97 265 162.187c-24.094-51.623-55.03-117.532-55.03-117.532l19.468 122.875L79.655 17.78H18.312zm425.312 243.345-43.406 46.938-23.595 5.875-33.594-18.344-50.06 50.094 18.31 33.562-5.874 23.563-46.03 42.562 80.093 14.03 28.717 28.72 13.188-13.22-51.5-51.53L469 471.625l-48.656-140.25 52.28 52.28 13.22-13.217-27.97-27.97-14.25-81.343zM392.062 357.5c69.03 70.208 33.083 106.35-37.218 37.22l37.22-37.22z"}"></path></svg>`;
});
export {
  Component as default
};