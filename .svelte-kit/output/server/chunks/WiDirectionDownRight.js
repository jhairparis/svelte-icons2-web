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
  )}><path d="${"M10.04 10.08c0-.3.09-.55.26-.73.2-.19.46-.28.79-.28.3 0 .55.09.73.28l6.05 6.05v-1.95c0-.3.1-.55.3-.75s.45-.3.75-.3c.29 0 .54.1.74.31s.3.45.3.75v4.48c0 .3-.1.55-.3.75s-.45.3-.74.3h-4.48c-.29 0-.54-.1-.74-.3s-.3-.45-.3-.75c0-.29.1-.54.3-.73s.45-.29.74-.29h1.93l-6.08-6.06a1.32 1.32 0 0 1-.25-.78z"}"></path></svg>`;
});
export {
  Component as default
};
