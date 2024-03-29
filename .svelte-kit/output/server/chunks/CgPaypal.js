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
  )}><path fill-rule="${"evenodd"}" d="${"M6.47 3.544h8c1.639 0 2.945.775 3.626 1.971 1.22.872 1.847 2.4 1.512 4.138-.521 2.712-3.183 4.91-5.944 4.91h-2l-1.134 5.892H6.398l.23-1.199h-3.18L6.47 3.544Zm1.622 1.964h6c1.657 0 2.746 1.32 2.433 2.946-.313 1.627-1.91 2.946-3.566 2.946h-4l-1.134 5.892h-2L8.092 5.508Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
