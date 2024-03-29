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
  )}><path d="${"M19.922 3.548v16.9a.5.5 0 0 0 1 0v-16.9a.5.5 0 0 0-1 0ZM16.419 11.5H5.578a2.5 2.5 0 0 1-2.5-2.5V6.565a2.5 2.5 0 0 1 2.5-2.5h10.841a2.5 2.5 0 0 1 2.5 2.5V9a2.5 2.5 0 0 1-2.5 2.5ZM5.578 5.065a1.5 1.5 0 0 0-1.5 1.5V9a1.5 1.5 0 0 0 1.5 1.5h10.841a1.5 1.5 0 0 0 1.5-1.5V6.565a1.5 1.5 0 0 0-1.5-1.5Zm10.841 14.873H10.55a2.5 2.5 0 0 1-2.5-2.5V15a2.5 2.5 0 0 1 2.5-2.5h5.869a2.5 2.5 0 0 1 2.5 2.5v2.436a2.5 2.5 0 0 1-2.5 2.502ZM10.55 13.5a1.5 1.5 0 0 0-1.5 1.5v2.436a1.5 1.5 0 0 0 1.5 1.5h5.869a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5Z"}" data-name="${"Align Right"}"></path></svg>`;
});
export {
  Component as default
};
