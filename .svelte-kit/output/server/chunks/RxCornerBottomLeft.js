import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M9.877 12H11.5a.5.5 0 0 0 0-1H9.9c-1.128 0-1.945 0-2.586-.053-.637-.052-1.057-.152-1.403-.329a3.5 3.5 0 0 1-1.53-1.529c-.176-.346-.276-.766-.328-1.403C4 7.045 4 6.228 4 5.1V3.5a.5.5 0 0 0-1 0v1.623c0 1.1 0 1.958.056 2.645.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.966c.51.26 1.077.378 1.775.435C7.92 12 8.776 12 9.877 12Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
