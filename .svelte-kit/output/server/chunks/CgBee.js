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
  )}><path fill-rule="${"evenodd"}" d="${"M17.951 15.571a5.993 5.993 0 0 1-2.27 4.064 4.016 4.016 0 0 1-1.756 1.96 2 2 0 0 1-3.874 0 4.016 4.016 0 0 1-1.756-1.96 5.993 5.993 0 0 1-2.269-4.047 3.001 3.001 0 0 1-4.11-4.32L6.01 6.39a6 6 0 0 1 11.953-.033l4.12 4.91a3 3 0 0 1-4.132 4.304Zm-2.326-2.665-1.678-2h-3.894l-1.678 2h7.25Zm2.363-.296 1.032 1.229a1 1 0 1 0 1.532-1.286l-2.564-3.055v3.112Zm-2-3.704v-2a4 4 0 0 0-8 0v2h8ZM4.98 13.839l1.007-1.2V9.527l-2.54 3.027a1 1 0 1 0 1.533 1.285Zm7.007 5.067a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};