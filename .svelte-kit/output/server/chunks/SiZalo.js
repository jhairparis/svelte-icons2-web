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
  )}><path d="${"M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.273 3.273 0 0 1-1.938.632 3.284 3.284 0 0 1-3.284-3.282 3.284 3.284 0 0 1 3.284-3.282 3.273 3.273 0 0 1 1.937.632h.001zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a7.714 7.714 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.857 9.23H.192V7.79H6.92zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354h-.961zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612 3.306 3.306 0 0 1-.002-6.612zm-10.14 5.253a1.932 1.932 0 1 0 0-3.863 1.932 1.932 0 0 0 0 3.863zm10.14-.003a1.945 1.945 0 1 0 0-3.89 1.945 1.945 0 0 0 0 3.89z"}"></path></svg>`;
});
export {
  Component as default
};