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
  )}><circle cx="${"12"}" cy="${"20"}" r="${"2"}"></circle><circle cx="${"12"}" cy="${"4"}" r="${"2"}"></circle><circle cx="${"6.343"}" cy="${"17.657"}" r="${"2"}"></circle><circle cx="${"17.657"}" cy="${"6.343"}" r="${"2"}"></circle><circle cx="${"4"}" cy="${"12"}" r="${"2.001"}"></circle><circle cx="${"20"}" cy="${"12"}" r="${"2"}"></circle><circle cx="${"6.343"}" cy="${"6.344"}" r="${"2"}"></circle><circle cx="${"17.657"}" cy="${"17.658"}" r="${"2"}"></circle></svg>`;
});
export {
  Component as default
};
