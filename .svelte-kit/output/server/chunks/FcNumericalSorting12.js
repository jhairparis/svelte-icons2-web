import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#546E7A"}" d="${"M38 33V5h-4v28h-6l8 10 8-10z"}"></path><path fill="${"#2196F3"}" d="${"M16.4 20h-3V8.6L9.9 9.7V7.3L16 5.1h.3V20zm3 23H9.2v-2l4.8-5.1c.4-.4.7-.8.9-1.1.2-.3.5-.6.6-.9.2-.3.3-.5.3-.8.1-.2.1-.5.1-.7 0-.7-.2-1.2-.5-1.6-.3-.4-.8-.6-1.4-.6-.3 0-.7.1-.9.2-.3.1-.5.3-.7.5-.2.2-.3.5-.4.8s-.1.6-.1 1h-3c0-.7.1-1.3.4-1.9.2-.6.6-1.1 1-1.6.5-.4 1-.8 1.6-1.1.6-.3 1.4-.4 2.2-.4.8 0 1.5.1 2.1.3.6.2 1.1.5 1.5.8s.7.8.9 1.3.3 1.1.3 1.8c0 .5-.1 1-.2 1.4s-.4 1.2-.7 1.7-.6.9-1 1.4c-.4.5-.9 1-1.4 1.5L13 40.6h6.4V43z"}"></path></svg>`;
});
export {
  Component as default
};
