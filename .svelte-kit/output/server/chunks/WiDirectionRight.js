import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 30 30" },
      { viewBox: "0 0 30 30" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M9.94 14.36c0 .22.08.42.23.57s.34.22.56.2h6.58l-1.03 1.08c-.16.16-.24.35-.24.55 0 .22.08.42.24.57.16.16.35.23.58.23.21-.01.39-.1.53-.27l2.45-2.41c.16-.16.23-.35.23-.58a.832.832 0 0 0-.24-.58l-2.47-2.39a.672.672 0 0 0-.54-.23c-.23 0-.42.07-.57.22-.16.15-.23.34-.23.56 0 .23.08.42.23.57l1.06 1.08h-6.59a.77.77 0 0 0-.56.25c-.15.17-.22.36-.22.58z"}"></path></svg>`;
});
export {
  Component as default
};
