import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M14 4a2 2 0 0 0-4 0v12h4V4zm5 4a2 2 0 0 0-4 0v8h4V8zM9 11a2 2 0 0 0-4 0v5h4v-5zm10 8H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
