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
  )}><path fill-rule="${"evenodd"}" d="${"M4.1 12.5a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Zm2 0a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Zm2.4.4a.4.4 0 0 1-.4-.4v-10a.4.4 0 1 1 .8 0v10a.4.4 0 0 1-.4.4Zm1.6-.4a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
