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
  )}><path d="${"M11 10.98a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Zm1-4.929a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}"></path><path fill-rule="${"evenodd"}" d="${"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
