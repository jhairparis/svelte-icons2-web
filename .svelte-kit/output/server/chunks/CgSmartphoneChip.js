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
  )}><path fill-rule="${"evenodd"}" d="${"M9 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M9 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM2 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm1-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm14-2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm7 6h-4v4h4v-4ZM8 8v8h8V8H8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
