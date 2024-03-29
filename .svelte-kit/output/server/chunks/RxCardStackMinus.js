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
  )}><path fill-rule="${"evenodd"}" d="${"M2.5 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-10ZM1 9.5a1.5 1.5 0 0 0 1 1.415v.585A1.5 1.5 0 0 0 3.5 13h8a1.5 1.5 0 0 0 1.5-1.5v-.585A1.5 1.5 0 0 0 14 9.5v-6A1.5 1.5 0 0 0 12.5 2h-10A1.5 1.5 0 0 0 1 3.5v6Zm11 2V11H3v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5ZM5.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
