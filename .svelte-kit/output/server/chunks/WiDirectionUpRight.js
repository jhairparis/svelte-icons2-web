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
  )}><path d="${"M10.05 17.55c0 .3.09.55.26.73.2.19.46.28.79.28.3 0 .55-.09.73-.28l6.04-6.05v1.95c0 .3.1.55.3.75.2.2.45.3.75.3.29 0 .54-.1.74-.31s.3-.45.3-.75V9.7c0-.3-.1-.55-.3-.75s-.45-.3-.74-.3h-4.5c-.29 0-.54.1-.73.3s-.29.44-.29.75c0 .29.1.54.29.73s.44.29.73.29h1.95l-6.06 6.06c-.17.21-.26.47-.26.77z"}"></path></svg>`;
});
export {
  Component as default
};