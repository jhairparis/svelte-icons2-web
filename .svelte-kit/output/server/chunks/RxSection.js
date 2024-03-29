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
  )}><path fill-rule="${"evenodd"}" d="${"M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM2 5v5h11V5H2Zm0-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2Zm-.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM10 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM9.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
