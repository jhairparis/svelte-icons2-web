import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"m1 3.5.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zM14 4H8v3.493h-.5l-3.574-.005 2.09-2.09-.707-.707-2.955 2.955v.708l2.955 2.955.707-.707-2.114-2.114 3.996.005H8v-.986l3.907.005-2.114-2.114.707-.707 2.956 2.955v.708L10.5 11.309l-.707-.707 2.09-2.09L8 8.507V12h6V4z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
