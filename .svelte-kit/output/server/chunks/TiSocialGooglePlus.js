import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m12.9 13.5-.7-.5c-.2-.2-.5-.4-.5-.8s.3-.7.6-1c.8-.6 1.7-1.3 1.7-2.8 0-1.5-.9-2.3-1.4-2.7h1.2L15 5h-4.1c-1 0-2.4.2-3.5 1.1-.8.7-1.2 1.7-1.2 2.6 0 1.5 1.2 3.1 3.3 3.1h.6c-.1.2-.2.4-.2.7 0 .6.3 1 .6 1.3-.9.1-2.5.2-3.8.9-1.2.7-1.5 1.7-1.5 2.4 0 1.5 1.4 2.8 4.2 2.8 3.4 0 5.2-1.9 5.2-3.7 0-1.3-.8-1.9-1.7-2.7zm-2.5-2.2c-1.7 0-2.5-2.2-2.5-3.5 0-.5.1-1 .4-1.5.3-.4.9-.7 1.4-.7 1.6 0 2.5 2.2 2.5 3.6 0 .4 0 1-.5 1.4-.3.4-.9.7-1.3.7zm0 7.9c-2.1 0-3.5-1-3.5-2.4s1.3-1.9 1.7-2c.8-.3 1.9-.3 2.1-.3h.5c1.5 1.1 2.1 1.6 2.1 2.6 0 1.2-1 2.1-2.9 2.1zM17 12h-2v-1h2V9.1l1-.1v2h2v1h-2v2h-1z"}"></path></svg>`;
});
export {
  Component as default
};