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
  )}><path fill-rule="${"evenodd"}" d="${"M19 20h-1.828l-4.465-4.465a1 1 0 0 0-1.414 0L6.828 20H5V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v13ZM17 7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10l2.879-2.879a3 3 0 0 1 4.242 0L17 17V7Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
