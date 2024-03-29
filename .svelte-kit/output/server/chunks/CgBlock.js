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
  )}><path d="${"M8.465 14.121a1 1 0 1 0 1.414 1.415l5.657-5.657a1 1 0 1 0-1.415-1.415l-5.656 5.657Z"}"></path><path fill-rule="${"evenodd"}" d="${"M6.343 17.657A8 8 0 1 0 17.657 6.343 8 8 0 0 0 6.343 17.657Zm9.9-1.414a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
