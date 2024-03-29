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
  )}><path d="${"M12.05 3.114c2.143 0 4.09.843 5.526 2.216L16.16 6.744a5.98 5.98 0 0 0-4.112-1.63 5.98 5.98 0 0 0-4.21 1.725L6.424 5.425a7.974 7.974 0 0 1 5.625-2.311Zm-1.073 8.772a1 1 0 1 1 2 0v2h-2v-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M11.977 6.886a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5Zm3 9v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 6 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
