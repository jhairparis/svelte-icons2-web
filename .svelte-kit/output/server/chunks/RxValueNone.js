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
  )}><path fill-rule="${"evenodd"}" d="${"M7.5.877a6.623 6.623 0 0 0-5.023 10.94l-.83.83a.5.5 0 1 0 .707.707l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 1 0-.708-.708l-.83.83A6.597 6.597 0 0 0 7.5.878Zm3.642 2.274a5.673 5.673 0 0 0-7.992 7.992l7.992-7.992Zm-7.284 8.698a5.673 5.673 0 0 0 7.992-7.992L3.857 11.85Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
