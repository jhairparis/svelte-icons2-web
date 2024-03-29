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
  )}><path fill-rule="${"evenodd"}" d="${"M13.5 13.95a.45.45 0 0 0 0-.9h-12a.45.45 0 1 0 0 .9h12Zm-2.432-6.382a.45.45 0 1 0-.636-.636L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 1 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0l3.25-3.25Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
