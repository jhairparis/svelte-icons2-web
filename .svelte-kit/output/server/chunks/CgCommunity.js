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
  )}><path fill-rule="${"evenodd"}" d="${"M12 17.456a6 6 0 1 1 0-10.912 6 6 0 1 1 0 10.912Zm-2-1.487a4 4 0 1 1 0-7.938A5.977 5.977 0 0 0 8.5 12a5.98 5.98 0 0 0 1.5 3.969Zm4-7.938a4 4 0 1 1 0 7.938A5.978 5.978 0 0 0 15.5 12 5.978 5.978 0 0 0 14 8.031Zm-2 .846c.915.733 1.5 1.86 1.5 3.123 0 1.263-.585 2.39-1.5 3.123A3.993 3.993 0 0 1 10.5 12c0-1.263.585-2.39 1.5-3.123Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
