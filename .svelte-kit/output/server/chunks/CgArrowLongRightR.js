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
  )}><path fill-rule="${"evenodd"}" d="${"m19.351 7.725 4.25 4.236-4.235 4.25-1.417-1.412 1.814-1.82-11.866.04-3.255 3.256-4.243-4.243L4.642 7.79l3.229 3.23 11.911-.04-1.843-1.837 1.412-1.417Zm-14.71 5.721 1.415-1.414-1.414-1.414-1.415 1.414 1.415 1.414Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
